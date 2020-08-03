require ('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const axios = require('axios');
const body_parser = require('body-parser');
const port = process.argv[2];

//inicializaciones
const app = express();

 //settings
 app.set('port',port||4000);

 //middleware
app.use(morgan('dev'));
app.use(body_parser.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

//Routes
//Recibir la imagen en el middleware
app.post('/api',async (req, res) => {

    const { email, value, image} = await req.body;
    console.log(email);
   // console.log(await req);
    await res.json({
        message:req.headers.host+'/uploads/'
    });


    /*
    const imgUrl = await axios.post('http://localhost:3000/addImage',{
        data: req.body,
        headers: {'Accept': 'application/json',
            'Content-Type': 'multipart/form-data'}
    }).then(async function(response){
        console.log('res service: '+response.message);
    }).catch((error) =>{
        console.log(error);
        res.json(error.message);
    });
    console.log('imgurl: ' + imgUrl);*/
});

//iniciar servidor
app.listen(app.get('port'),()=>{
    console.log('Server on port ',app.get('port'));
});