const Input = ({ id = '', label = '', errors = [], disabled = false, className, ...props }) => (
  <div>
    <label htmlFor={id} className="block text-sm text-gray-800 ">{label}</label>
    <input
        disabled={disabled}
        className={`${className} block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40`}
        {...props}
    />
    <div className="mt-2">
      {errors.length > 0 && (
          <>
              {errors.map((message, index) => (
                  <p
                      className={`${className} text-sm text-red-600`}
                      key={index}>
                      {message}
                  </p>
              ))}
          </>
      )}
    </div>
  </div>
)

export default Input
