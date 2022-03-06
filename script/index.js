var year = document.getElementById("birthYear");
var month = document.getElementById("birthMonth");
var day = document.getElementById("birthDay");
var submit = document.getElementById("submit-btn");

function calculateDay() {
    let CC = year.value.slice(0, 2);
    let YY = year.value.slice(2);
    let MM = month.value;
    let DD = day.value;
    let akanDay = Math.floor((CC / 4 - 2 * CC - 1 + (5 * YY / 4) + (26 * (MM + 1)) / 10) + DD) % 7;

    return akanDay;
}

function getAkanName() {
    let gender = document.getElementById("gender")
    console.log(gender.value);
    let index = calculateDay();
    let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];


    if (gender.value == "female") {
        let name = femaleNames[index]
        document.getElementById("output").innerHTML = name;

    } else {
        let name = maleNames[index]
        document.getElementById("output").innerHTML = name;
    }

}

function formValidate() {
    if (year.value == "") {
        alert("Enter a valid year")
    } else if (month.value < "1") {
        alert("Enter a valid month")
    } else if (day.value == "") {
        alert("enter a valid day")
    } else {
        getAkanName();

    }

}

submit.addEventListener("click", function (e) {
    e.preventDefault();
    formValidate();

})
