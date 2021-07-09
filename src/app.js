const express =require('express')
const hbs=require('hbs')
const path=require('path');
const publicDirectory=path.join(__dirname,'../public');
const geocode=require('./utils/geocode');
const forecast=require('./utils/forecast');
const app=express();

app.set('view engine','hbs')
app.use(express.static(publicDirectory))

const ViewPath=path.join(__dirname,'../templates/views');
const PartialsPath=path.join(__dirname,'../templates/partials')

app.set('views',ViewPath)
hbs.registerPartials(PartialsPath);

app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather app',
        name:'Amanjot'
    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        title:'FOR ANY ISSUE. EMAIL AT : weather@7226yahoo.com',
       
    })
})

app.get('/weather',(req,res)=>{
   if(!req.query.address){
       return res.send({
           error:'You must provide an address!'
       })
   }
   geocode(req.query.address,(error,{latitude,longitude,location}={})=>{
    if(error){
      return res.send({error});
    }
    
  forecast(latitude,longitude,(error,forecastdata)=>{
    if(error){
    return res.send({error})
    }
    res.send({
        forecast:forecastdata,
        location,
        address:req.query.address
    })
})
   })
})


app.get('/products',(req,res)=>{
    res.send({
        prodducts:[]
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About',
        name:'Amanjot Singh'
    })
})
app.get('*',(req,res)=>{
    res.render('404',{
       
        name:'Amanjot Singh',
        errorMessage:'PAGE DONT WORK'
    })
})
app.listen(3000,()=>{
    console.log('server on  3000')
})