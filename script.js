const wrapper = document.querySelector(".wrapper"),
inputPart = document.querySelector(".input-part"),
infoTxt = document.querySelector(".info-txt"),
inputField = inputPart.querySelector("input");

inputField.addEventListener("keyup", event => {
    //if user pressed enter and input field is not empty
    if(event.key == "Enter" && inputField != ''){
        requestApi(inputField.value);
    }
});

function requestApi(city){
    //get lat and lon for the city user entered 
    let geocodingAPI = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=95e85534cd75c53082092a43a7a59363`;
    fetch(geocodingAPI).then(response => console.log(response.json()));

    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${}&lon={lon}&appid=1ac5d7d49c1fc023415ce87ca9ce4728`;
}