require ('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const axios = require('axios');
const port = process.argv[2];

//inicializaciones
const app = express();

 //settings
 app.set('port',port||4000);

 //middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

//Routes
//Recibir la imagen en el middleware
app.post('/api',async (req, res) => {
    /*
    const { email, value,image } = await req.body;
    console.log('email: '+ email);
    console.log(req.files);
    await res.json({
        message:req.headers.host+'/uploads/'
    });*/
   const urlImg = await axios.post('http://localhost:3000/addImage',{
        data: req.data,
        headers: {
            'Content-Type': 'multipart/form-data'}
    })
    .then(async function(response){
        console.log(response.message);
    }).catch((error) =>{
        console.log(error);
        res.json(error.message);
    });
    console.log(urlImg);
});

//iniciar servidor
app.listen(app.get('port'),()=>{
    console.log('Server on port ',app.get('port'));
});