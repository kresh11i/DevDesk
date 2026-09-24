

const Badge = ({children}) => {
  return (
    <div className="p-3 rounded-3xl bg-black border border-red-500 text-white text-center">
      {children}
    </div>
  )
}

export default Badge
