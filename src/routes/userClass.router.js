import { RouterClass } from './router.js'


class UserRouter extends RouterClass {
    
    init(){
        this.get('/', ['ADMIN'], (req, res)=>{
            try {
                
                res.sendSuccess([])
            } catch (error) {
                res.sendServerError(error)
            }
        })
        this.post('/', (req, res)=>{
            res.send({message: 'create users'})
        })
    } 
}

export{
    UserRouter  
}