const negativeWeightHandler = ({weight}, dispatch, action) => {
    if (weight<0){
        setTimeout(() => {
            dispatch(action())
        }, 3000)
    }
}
export default negativeWeightHandler