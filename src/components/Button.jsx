function Button({name,className,key,onClick}) {
    return (
      <div>
        <button className={className} key={key} onClick={onClick}>{name}</button>
      </div>
    )
  }
  
  export default Button;