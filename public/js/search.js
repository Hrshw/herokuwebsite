const sendData = (e) => {
    fetch('getbooks',{
        method: "post",
        headers: {'content-Type': 'aplication.json'},
        body: JSON.stringify({payload: e.value})
    }).then(res => res.json()).then(data =>{
        let payload = data.payload;
        console.log(payload)
    })
}