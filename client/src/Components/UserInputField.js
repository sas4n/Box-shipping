const UserInputField = ({className,onChange, value, type, name}) => {
    return (
        
            <input type={type} className= {className} name={name} id={name} onChange={onChange} value={value}/>
        
    )
}
export default UserInputField