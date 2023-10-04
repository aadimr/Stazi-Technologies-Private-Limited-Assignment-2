function Button({name,className,index,onClick}) {
    return (
      <div>
        <button name={name} className={className} key={index} onClick={onClick}>{name}</button>
      </div>
    )
  }
  
  export default Button;