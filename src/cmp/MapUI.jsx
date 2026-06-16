import { useEffect, useState } from "react"
import { MapContainer, TileLayer, GeoJSON, useMap } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

const GEO_URL = "/lamongan-kec.geojson"

// Hanya 2 status: tersedia atau tidak tersedia
const areaStatus = {
  Brondong: "tersedia",
  Paciran: "tersedia",
}

const isAvailable = (name) => areaStatus[name] === "tersedia"

const fillFor = (name) => (isAvailable(name) ? "#FF6200" : "#D1D5DB")

const baseStyle = (name) => ({
  fillColor: fillFor(name),
  fillOpacity: 0.75,
  color: "#fff",
  weight: 1,
})

const hoverStyle = () => ({
  fillColor: "#CC4E00",
  fillOpacity: 0.85,
  color: "#fff",
  weight: 1.5,
})

// Sekali data dimuat, geser & zoom peta otomatis mengikuti batas wilayah Lamongan
const FitBounds = ({ data }) => {
  const map = useMap()
  useEffect(() => {
    if (!data) return
    map.fitBounds(L.geoJSON(data).getBounds(), { padding: [16, 16] })
  }, [data, map])
  return null
}

const MapUI = () => {
  const [geoData, setGeoData] = useState(null)

  useEffect(() => {
    fetch(GEO_URL)
      .then((res) => res.json())
      .then(setGeoData)
      .catch((err) => console.error("Gagal memuat peta:", err))
  }, [])

  const onEachFeature = (feature, layer) => {
    const name = feature.properties.kecamatan

    layer.on({
      mouseover: () => layer.setStyle(hoverStyle()),
      mouseout: () => layer.setStyle(baseStyle(name)),
    })

    layer.bindTooltip(name, { sticky: true })
  }

  return (
    <div className="realtive w-full h-full rounded-sm overflow-hidden z-10">
      {geoData ? (
        <MapContainer
          center={[-7.12, 112.31]}
          zoom={10}
          scrollWheelZoom={false}
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; OpenStreetMap contributors &copy; CARTO'
          />
          <GeoJSON
            data={geoData}
            style={(feature) => baseStyle(feature.properties.kecamatan)}
            onEachFeature={onEachFeature}
          />
          <FitBounds data={geoData} />
        </MapContainer>
      ) : (
        <div className="h-full w-full flex items-center justify-center text-sm text-gray-400">
          Memuat peta...
        </div>
      )}
    </div>
  )
}

export default MapUI