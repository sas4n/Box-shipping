import '../../css/button.css'
const Button = ({className,type, name, onClick, children}) => {
    return (
            <button className={className} onClick={onClick}type={type} name={name} >{children}</button>
        
    )
}
export default Button

