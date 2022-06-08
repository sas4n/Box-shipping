//const callback = (query,(err, result)=>{

//}) 
module.exports = {
    createConnection(){
        return {
            
            query: (query, callback) => {
                    
                    callback(null,'something')
                
            }
        }
    },
    createPool(){

    }
}