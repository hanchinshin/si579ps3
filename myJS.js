/*
* Excercise 1
*
*/
/*
* Then write a function that changes the text and the color inside the div
*
*/
const colorBlock = document.getElementById('color-block');
const colorNam = document.getElementById('color-name');
colorBlock.onclick = changeColor;
function changeColor(){
    if (colorBlock.style.backgroundColor === "rgb(240, 128, 128)") {
        //change the background color using JS
        colorBlock.style.backgroundColor = "#0000AA";
        //Change the text of the color using the span id color-name
        colorNam.textContent = "0000AA";
    }
    else{
        //change the background color using JS
        colorBlock.style.backgroundColor = "#F08080";
        //Change the text of the color using the span id color-name
        colorNam.textContent = "#F08080";
    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/


/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

document.getElementById("convertbtn").addEventListener("click", convertTemp);
function convertTemp(){
    let ft = document.getElementById("f-input").value;
    //Calculate the temperature here
    ct = (ft-32)/1.8;
    //Send the calculated temperature to HTML
    document.getElementById("c-output").innerHTML = ct;
}


