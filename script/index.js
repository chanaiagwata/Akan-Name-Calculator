var year = document.getElementById("birthYear");
var month = document.getElementById("birthMonth");
var day = document.getElementById("birthDay");
var submit = document.getElementById("submit-btn");

// find day
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
    let englishDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", ];
    let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

    // get female name and day


    if (gender.value == "female") {
        if (femaleNames[index] == englishDays.indexOf("Sunday")) {
            document.getElementById("output").innerHTML = "Day of birth Sunday: Thus, your Akan Name would be: " + femaleNames[0];
            return true
        } else if (index == englishDays.indexOf("Monday")) {
            document.getElementById("output").innerHTML = "Day of birth is Monday: Thus, your Akan Name would be: " + femaleNames[1];
            return true
        } else if (index == englishDays.indexOf("Tuesday")) {
            document.getElementById("output").innerHTML = "Day of birth is Tuesday: Thus, your Akan Name would be: " + femaleNames[2];
            return true
        } else if (index == englishDays.indexOf("Wednesday")) {
            document.getElementById("output").innerHTML = "Day of birth is Wednesday: Thus, your Akan Name would be: " + femaleNames[3];
            return true
        } else if (index == englishDays.indexOf("Thursday")) {
            document.getElementById("output").innerHTML = "Day of birth is Thursday: Thus, your Akan Name would be: " + femaleNames[4];
            return true
        } else if (index == englishDays.indexOf("Friday")) {
            document.getElementById("output").innerHTML = "Day of birth is Friday: Thus, your Akan Name would be: " + femaleNames[5];
            return true
        } else
            document.getElementById("output").innerHTML = "Day of birth is Saturday: Thus, your Akan Name would be: " + femaleNames[6];

    }
    // get male name and day
    if (gender.value == "male") {
        if (maleNames[index] == englishDays.indexOf("Sunday")) {
            document.getElementById("output").innerHTML = "Day of birth Sunday: Thus, your Akan Name would be: " + maleNames[0];
            return true
        } else if (index == englishDays.indexOf("Monday")) {
            document.getElementById("output").innerHTML = "Day of birth is Monday, Thus, your Akan Name would be: " + maleNames[1];
            return true
        } else if (index == englishDays.indexOf("Tuesday")) {
            document.getElementById("output").innerHTML = "Day of birth is Tuesday: Thus, your Akan Name would be: " + maleNames[2];
            return true
        } else if (index == englishDays.indexOf("Wednesday")) {
            document.getElementById("output").innerHTML = "Day of birth is Wednesday: Thus, your Akan Name would be: " + maleNames[3];
            return true
        } else if (index == englishDays.indexOf("Thursday")) {
            document.getElementById("output").innerHTML = "Day of birth is Thursday: Thus, your Akan Name would be: " + maleNames[4];
            return true
        } else if (index == englishDays.indexOf("Friday")) {
            document.getElementById("output").innerHTML = "Day of birth is Friday: Thus, your Akan Name would be: " + maleNames[5];
            return true
        } else
            document.getElementById("output").innerHTML = "Day of birth is Saturday: Thus, your Akan Name would be: " + maleNames[6];

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

function clearing() {
    document.getElementById("myForm").reset();
}

submit.addEventListener("click", function (e) {
    e.preventDefault();
    formValidate();
    clearing();

})
