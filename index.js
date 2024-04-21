const alnumObj={
    num: "1234567890",
    small: "abcdefghijklmnopqrstuvwxyz",
    capital: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    alpha: "!@#$%^&*",
}
let mainId=Object.entries(alnumObj).map(([key,value])=>value).join("")

function alnumid(len,option){

    let id=mainId
    let uid=""
    
    if(option){
        id=Object.entries(option).map(([key,value])=>{ 
            if(key in alnumObj){
                if(value===true){
                    return alnumObj[key]
                }
            }
            else{
                throw new Error("Wrong key is entered")
            } }).join("")
    }
    if(id.length==0){ id=mainId }

    for(var i=0;i<len;i++){
       uid+=id[Math.floor(Math.random()*id.length)]
    }
    
    return uid
}

module.exports = alnumid