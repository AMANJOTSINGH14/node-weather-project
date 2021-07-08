const One=document.querySelector("#one")
const two=document.querySelector("#two")
let search = document.querySelector("input")
let weatherForm = document.querySelector("form")
weatherForm.addEventListener("submit", (e)=>{
e.preventDefault()
const locationss=search.value;

One.textContent='Loading...... Please Wait!!'

fetch('http://localhost:3000/weather?address='+locationss).then((resonse)=>{
resonse.json().then((data)=>{
    if(data.error){
        console.log(data.error)
        One.textContent=data.error;
    }
    else{
    One.textContent=data.location;
        two.textContent=data.forecast;
    }
})
}

)
})

