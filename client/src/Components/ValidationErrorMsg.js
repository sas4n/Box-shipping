const ValidationErrorMsg = ({children, show}) => {
    return (
        <span>{show ? children : null}</span>
    )
}
export default ValidationErrorMsg