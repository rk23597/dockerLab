const express= require('express');

const app =express();

app.get('/',(req ,res)=>{

    res.send('Hi thereclsd');
});

app.listen(9091,()=>{

    console.log('listening on port 9091');
});