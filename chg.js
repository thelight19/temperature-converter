const calculateTemp = () => {

    const numberTemp = document.getElementById('temp').value;
   // console.log(numberTemp);

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
   
    const celToFah = (cel) => {
        let Fahrenheit = Math.round((cel * 9/5) + 32);
        return Fahrenheit;
    }
    const fehTocel = (feh) => {
        let celcius = Math.round((feh - 32)* 5/9);
        return celcius;
    }
    let result;


    if(valueTemp == 'cel'){
        result = celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML= `= ${result}°Fahrenheit`;
    }else{
        result = fehTocel(numberTemp);
        document.getElementById('resultContainer').innerHTML= `= ${result}°Celcius`;

    }
}
