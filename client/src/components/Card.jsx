const Card = ({children}) => {
  return (
    <div className="w-[350px] h-[46vh] px-4 py-4 border-[2px] shadow-lg rounded">
      {children}
    </div>
  )
}

export default Card
