const SendResponse = (data)=>{
    // data is object
    let newData = {
        questionNo: data
    }
    window.parent.postMessage(newData, '*');
}