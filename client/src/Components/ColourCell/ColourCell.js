const ColourCell = ({box}) => {
    return (
        <td style={{ background: `rgb(${box.color_r},${box.color_g},${box.color_b})` }}/>
    )
}
export default ColourCell