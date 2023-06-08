import {app} from './app.js'
import { dbConnect } from './config/db.js';
const PORT=8000
const start = () => {
    try{
        dbConnect()
    }catch(err){
        console.log("connection error",err);
    }


    app.listen(PORT,(err)=>{
        if(err)console.log("server error",err);
        else console.log("server started on",PORT)
    })
}
start()