var year = document.getElementById("birthYear");
var month = document.getElementById("birthMonth");
var day = document.getElementById("birthDay");
var submit = document.getElementById("submit-btn");
var output = document.getElementById("output");


function calculateDay(){
    let CC = year.value.slice(0,2);
    let YY = year.value.slice(2);
    let MM = month.value;
    let DD = day.value;
    if ((CC == 0) && (YY==0)){
        alert ("Enter a valid year")
    }
    else if (DD<=0){
        alert("Enter a valid birthday")
    }
    else{
        let day = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
    }
   
    return day.toFixed()
}
function getAkanName(){
    let gender = document.getElementById("gender").value;
    let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]; 
    let findNameIndex = calculateDay();
    if (gender== "male"){
        let mName = maleNames[findNameIndex];
    console.log(mName);
    }
    else{
        let fName = femaleNames[findNameIndex];
console.log(fName);
    }

}
submit.addEventListener("click", function(e){
    e.preventDefault();
    calculateDay()
})
