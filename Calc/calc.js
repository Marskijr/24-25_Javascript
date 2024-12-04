// Setup Access to HTML Elements
const buttons= document.querySelectorAll('button');
const display= document.querySelectorAll('.display');

//add listener to all buttons
buttons.forEach(
    function(button){
        button.addEventListener("click", calculate);
    }
);

function calculate(event){
    //what button was clicked?
    const clickedValue = event.target.value;

    if(clickedValue === "="){
        // is the display empty?
        if(display.value !== ""){
            //Calculate the value and display it
            display.value = eval(display.value);
        }
    } else if(clickedValue === "C"){
        display.value = "";
    }else{
        display.value += clickedValue;
    }
}
