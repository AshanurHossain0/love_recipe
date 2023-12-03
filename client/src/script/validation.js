const validName=(name,setError)=>{
    console.log(name);
    if(!name){
        setError({status:true,msg:"Fullname is mandatory"});
        return false;
    };
    let nameArr=name.split(" ");
    if(nameArr.length<2 || nameArr.length>6){
        setError({status:true,msg:"Invalid fullname"});
        return false;
    }
    let nameReg=/^[A-Za-z]+$/;
    for(let i=0;i<nameArr.length;i++){
        if(nameArr[i].length <3){
            setError({status:true,msg:"Invalid fullname"});
            return false
        };
        if(! nameReg.test(nameArr[i])){
            setError({status:true,msg:"Invalid fullname"});
            return false;
        }
    }
    return true;
}

const validEmail = (email,setError)=> {
    
    if(!email){
        setError({status:true,msg:"Email is mandatory"});
        return false;
    };
    
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-z\-0-9]+\.)+[a-z]{2,3}))$/
    if(! emailRegex.test(email)){
        setError({status:true,msg:"Invalid email"});
        return false;
    }
    return true;
}

const validPass=(pass,setError)=>{
    if(!pass){
        setError({status:true,msg:"Password is mandatory"});
        return false;
    };
    if(pass.length<5){
        setError({status:true,msg:"Password is too short"});
        return false;
    }
    if(pass.length>16){
        setError({status:true,msg:"Password is too long"});
        return false;
    }
    return true;
}

const validCity=(city,setError)=>{
    if(!city){
        setError({status:true,msg:"City is mandatory"});
        return false;
    }
    const cityArr=city.split(" ");
    let cityReg=/^[A-Za-z]+$/;
    for(let i=0;i<city.length;i++){
        if(!cityReg.test(cityArr[i])){
            setError({status:true,msg:"Invalid city name"});
            return false;
        }
    }
    return true;
}

const regValidate=({name,city,email,password,setRegError})=>{
    const isOk= validEmail(email,setRegError) && validName(name,setRegError) && validPass(password,setRegError) && validCity(city,setRegError);
    if(isOk) setRegError({status:false,msg:"ok"});
}
const loginValidate=({email,password,setLogError})=>{
    const isOk= (validEmail(email,setLogError) &&  validPass(password,setLogError));
    if(isOk) setLogError({status:false,msg:"ok"});
}

export {regValidate,loginValidate}