const Toast = ({ message, show, type = "success" }) => {
  if (!show) return null

  return (
    <div className={`fixed bottom-6 right-6 z-50 px-5 py-3 rounded-lg shadow-lg text-white font-outfit text-sm transition-all duration-300 ${
      type === "success" ? "bg-green-600" : "bg-red-600"
    }`}>
      {message}
    </div>
  )
}

export default Toast
