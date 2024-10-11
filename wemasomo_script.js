const SendResponse = (data)=>{
    window.parent.postMessage(data, '*');
}

const ValidateResponse = (resp, ans, questionID, action)=>{
    if(resp === ans){
        action("true")
    }else{
        action("Incorrect please retry ↻", [], false)
    }
}