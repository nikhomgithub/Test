const functions={
    add:(num1,num2)=>num1+num2,
    isNull:()=>{return null},
    checkValue:(x)=>x,
    createUser:()=>{
        const user={name:"Nikhom"};
        user['lastname']="Phut";
        return user;
    }
}

module.exports=functions;