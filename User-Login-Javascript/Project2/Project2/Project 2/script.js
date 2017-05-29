//Assignment: Project 2
//By: Sean Legge
//Student Number: 0062897
//Professor: Martin Cserhati
//Date: Aug 11th 2015
//Last Worked On: Aug 14th 2015

//Show the hidden form
function showInput() {
    //Change the css to show the hidden section and change the images at the top. 
    document.getElementById("hiddenInput").style.visibility = "visible";
    document.getElementById("basicText").textContent = "Register to use SuperSite services with the following form:";
    document.getElementById("facebook").src = "images/facebookgray.png";
    document.getElementById("google").src = "images/googlegray.png";
    document.getElementById("windows").src = "images/winlivegray.png";
    document.getElementById("yahoo").src = "images/yahoogray.png";
}
//When the user hits cancel, hide the input fields again.
function hideInput() {
    //Change the css to rehide the hidden section and change all the images at the top back to normal.
    document.getElementById("hiddenInput").style.visibility = "hidden";
    document.getElementById("basicText").textContent = "If you haven't already registered with SuperSite";
    document.getElementById("facebook").src = "images/facebookshadow.ico";
    document.getElementById("google").src = "images/googleshadow.ico";
    document.getElementById("windows").src = "images/winliveshadow.ico";
    document.getElementById("yahoo").src = "images/yahooshadow.ico";
}
//Function to handle mouse over event
function mover(tagID, img) {
    document.getElementById(tagID).src = img;
}
//Function to handle mouse out event
function mout(tagID, img) {
    document.getElementById(tagID).src = img;
}
//Function to handle mouse down event
function mouseDown(tagID, img) {
    document.getElementById(tagID).src = img;
}
//Function to handle mouse up event
function mouseUp(tagID, img) {
    document.getElementById(tagID).src = img;
}
//Set focus
function myFunctionFocus(x) {
    x.style.color = "Black";   
}
//Set blur
function myFunctionBlur(y) {
    y.style.color = "#FFFFFF";
}
//Function to save the users information then alert it back to them.
function saveInformation() {
    //Take in user input
    var name = document.getElementById("userName").value;
    var password = document.getElementById("password").value;
    //Combine the two values
    var final = name + "," + password;
    //Output the value to the user again.
    alert(final);
}
//Check to see if the input in both fields is the exact same.
$(document).ready(function () {
    //Check the values of the password and verify fields whenever there is a keyup action.
    $('#password,#verify').keyup(function () {
        //Assign the values of password and verify to text1 and text1
        var text1 = $('#password').val();
        var text2 = $('#verify').val();
        //Check to see if the values are the same.
        if (text1 === text2) {
            //If the textboxes are the same remove the disabled attribute allowing the user to click the Save button.
            $('#save').removeAttr("disabled");
        } else {
            //If the values aren't the same set the Save button to be disabled.
            $('#save').attr("disabled", "disabled");
        }
    });
});