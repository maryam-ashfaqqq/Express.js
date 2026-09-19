import  userList  from "../model/model.js"
export default function handleUser(req,resp) {
    const userData=userList()
   resp.render("user",{userData}) 
}