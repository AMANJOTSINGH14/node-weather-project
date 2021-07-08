const forecast=require('./forecast');
const geocode=require('./geocode');
const address=process.argv[2];
// const url =
//   'http://api.weatherstack.com/current?access_key=c96d8387a7ebb641024e459d9947c0f2&query=32.7266,74.8570&units=f';
// request({ url: url , json:true} , (error, response) => {
//     console.log('The temperature is: '+response.body.current.temperature+" But it feels like: "+response.body.current.feelslike)
// });
// const genourl =
//   'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYW1hbmpzaW5naCIsImEiOiJja3FwMXBkNHowMTVjMnJwbjkyZzVnZzNxIn0.qmusK1v6I_Nag1G3p769hA&limit=1';
// request({ url: genourl , json:true} , (error, response) => {
//     const latitude=response.body.features[0].center[1];
//     const longitude=response.body.features[0].center[0];
//     console.log(latitude , longitude);
// });



if(!address){
  console.log('please provide a address')
}else{
geocode(address,(error,{latitude,longitude,location}={})=>{
  if(error){
    return console.log('Error',error);
  }
  
  forecast(latitude,longitude,(error,forecastdata)=>{
    if(error){
    console.log('Error',error);
    }
    console.log(location);
    console.log(forecastdata)
  })
})

}
