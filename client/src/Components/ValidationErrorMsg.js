const ValidationErrorMsg = ({children, show, className}) => {
    return (
        <span className={className}>{show ? children : null}</span>
    )
}
export default ValidationErrorMsg