const SendResponse = (data)=>{
    // data is object
    let newData = {
        questionNo: data
    }
    window.parent.postMessage(newData, '*');
}

const Test = ()=>{
    alert("Hello")
}