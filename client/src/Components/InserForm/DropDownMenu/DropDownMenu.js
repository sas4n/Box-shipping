const DropDownMenu = ({className,value, onChange}) => {
    return (
        <div>
        <select className={className} value={value} name='country' onChange={onChange}>
            <option value="China">China</option>
            <option value="Sweden">Sweden</option>
            <option value="Australia">Australia</option>
            <option value="Brazil">Brazil</option>
        </select>
        </div>
    )
}
export default DropDownMenu