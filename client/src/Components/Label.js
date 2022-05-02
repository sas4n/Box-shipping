//import '../css/label.css'
const Label = ({className,children}) => {
    return (
        <div>
            <label className={className}>{children}</label>
        </div>
    )
}

export default Label