const forms = document.querySelector("form")

//this following comment is wrong

//const heights = parseInt(document.querySelector("#height"))

forms.addEventListener("submit", function (e){
    e.preventDefault()

    const heights = parseInt(document.querySelector("#height").value)

    const weights = parseInt(document.querySelector("#weight").value)

    const result = document.querySelector("#results")

    if( heights === "" ){
        result.innerHTML = "Height can't be empty"
    }


    if(  heights <= 0  ){
        result.innerHTML = "Height can't be negative"
    }


    if(  isNaN (heights) ){
        result.innerHTML = "Height must be a number"
    }


    if(  isNaN (weights) ){
        result.innerHTML = "weights must be a number"
    }


    if(  isNaN (weights) ){
        result.innerHTML = "weights must be a number"
    }


    if(  isNaN (weights) ){
        result.innerHTML = "weights must be a number"
    }

    else{
      const BMI =  (weights/((heights*heights)/10000)).toFixed(2)
      const resBMI = document.querySelector("#BMI")

    //   result.innerHTML = ` <span id = "BMI" > Your BMI is ${BMI} </span>`
if (BMI < 18.6){
    result.innerHTML = ` <span class = "BMI" > Your BMI is ${BMI} which is underweight </span> `
}    

else if (BMI > 18.6 && BMI< 24.9 ){
    result.innerHTML = ` <span class = "BMI" > Your BMI is ${BMI} which is in normal range </span> `
} 

else if ( BMI> 24.9 ){
    result.innerHTML = ` <span class = "BMI" > Your BMI is ${BMI} which is overweight </span> `
} 

}

  

} )
