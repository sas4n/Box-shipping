//import '../css/label.css'
const Label = ({className,children, role}) => {
    return (
        <div>
            <label role={role} className={className}>{children}</label>
        </div>
    )
}

export default Label