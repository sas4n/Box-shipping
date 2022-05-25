module.exports ={
    
    Router(){
        return {
            get(path, callback){
                if(path==='/listboxes'){
                    callback()
                }
            },
            post(path, callback){
                if(path==='/addBox'){
                    callback()
                }
            }
        }
    }
}