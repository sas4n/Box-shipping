const DropDownMenu = ({value, onChange}) => {
    return (
        <div>
        <select value= {value} name= 'country' onChange={onChange}>
            <option value="China">China</option>
            <option value="Sweden">Sweden</option>
            <option value="Australia">Australia</option>
            <option value="Brazil">Brazil</option>
        </select>
    </div>
    )
}
export default DropDownMenu