const UserInputField = ({className,onChange, value, type, name,testId}) => {
    return (
        
            <input type={type} className= {className}  name={name} id={name} onChange={onChange} value={value} data-testid={testId}/>
        
    )
}
export default UserInputField