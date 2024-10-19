const convertBtn = document.getElementById('calcBtn');
const input = document.querySelector('.inputAmount');
let fromUnit = document.getElementById('fromSelect');
let toUnit = document.getElementById('toSelect');
let noInput = document.getElementById('fault');
let stringInput = document.getElementById('textInput');
let noUnitSelected = document.getElementById('noUnitSelected');
let displayPlace = document.getElementById('resultDisplay');

convertBtn.addEventListener('click' , function(){
    if(input.value == ''){
        noInput.style.display = 'block';
        displayPlace.innerHTML = '';
    }
    else{
        noInput.style.display = 'none'
        let result = 0;
        let inputValue = Number(input.value);
        if(isNaN(inputValue)){
            stringInput.style.display = 'block';
            displayPlace.innerHTML = '';
        }
        else{
            stringInput.style.display = 'none';
            if(fromUnit.value ==='Select The Unit' || toUnit.value === 'Select The Unit'){
                noUnitSelected.style.display='block';
            }
            else{
                noUnitSelected.style.display='none';
            }
            if(fromUnit.value === toUnit.value){
                displayPlace.innerHTML = inputValue;
            }
            if(fromUnit.value === "cm" && toUnit.value === "m"){
                result = inputValue / 100;
                console.log(result);
                displayPlace.innerHTML = result.toFixed(2); 
            }
            else if(fromUnit.value === "cm" && toUnit.value === "mm"){
                result = inputValue * 10;
                console.log(result);
                displayPlace.innerHTML = result.toFixed(2); 
            }
            else if(fromUnit.value === "m" && toUnit.value === "cm"){
                result = inputValue * 100;
                console.log(result);
                displayPlace.innerHTML = result.toFixed(2); 
            }
            else if(fromUnit.value === "m" && toUnit.value === "mm"){
                result = inputValue * 1000;
                console.log(result);
                displayPlace.innerHTML = result.toFixed(2); 
            }
            else if(fromUnit.value === "mm" && toUnit.value === "m"){
                result = inputValue / 1000;
                console.log(result);
                displayPlace.innerHTML = result.toFixed(2); 
            }
            else if(fromUnit.value === "mm" && toUnit.value === "cm"){
                result = inputValue / 10;
                console.log(result);
                displayPlace.innerHTML = result.toFixed(2); 
            }
        }
    }
})
