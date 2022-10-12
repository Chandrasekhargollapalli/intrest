document.getElementById('btn').onclick = function (){
   let amount = document.getElementById('num1').value;
   let years = document.getElementById('num2').value;
   let intrest =document.getElementById('num3').value;

    amount = Number(amount);
    years = Number(years);
    intrest = Number(intrest);

let result = (amount * (years*12) * intrest)/100;

document.getElementById('am').innerHTML = "AMOUNT = " +amount;

document.getElementById('da').innerHTML =  "YEARS = " +years;

document.getElementById('in').innerHTML =  "INTREST = " +intrest +"%";

document.getElementById('tot').innerHTML = 
"TOTAL INTREST = Rs :" +result;

// result = Number(result);

console.log(result);
}