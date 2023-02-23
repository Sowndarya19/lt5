const express=require('express');

const apiRoutes=require('./server/routes/api.routes');



//setting env setup
require('dotenv').config();

require('./server/config/db');
const app=express();
app.use(express.json());
app.use('/api',apiRoutes);

const port=process.env.port||4000;
app.listen(port,()=>{
    console.log('server is running at http://localhost:${port}');
});