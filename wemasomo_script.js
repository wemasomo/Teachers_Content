const SendResponse = (data)=>{
    window.parent.postMessage(data, '*');
}

const ValidateResponse = (resp, ans, questionID)=>{
    if(resp === ans){
        send.lia("true")
    }else{
        send.lia("Incorrect please retry ↻", [], false)
    }
}