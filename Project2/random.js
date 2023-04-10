const random = () => {
    let min = document.querySelector("#num1").value;
    let max = document.querySelector("#num2").value;

    if(num1 ===''|| num2 ===''){
        alert('Need input add field!');
        return;
    }

    min = parseFloat(min);
    max = parseFloat(max);

    let randomNumber = Math.floor(Math.random()*(max-min+1)+min);


    document.querySelector("#result").innerHTML = `Result is ${randomNumber}`;
}