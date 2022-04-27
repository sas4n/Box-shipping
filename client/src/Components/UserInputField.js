const UserInputField = ({onChange, value, type, name, children}) => {
    return (
        <>
             <label >{children}</label>
            <input type={type} name={name} id={name} onChange={onChange} value={value}/>
        </>
    )
}
export default UserInputField