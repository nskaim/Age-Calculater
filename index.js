const btnE1=document.querySelector("#btn");
const birthdayE1=document.querySelector("#birthday");
const resultE1 = document.querySelector("#result");
function calculateAge(){
    const birthdayValue = birthdayE1.value;
    if(birthdayValue===""){
        alert("Please enter your birthday ");
    }
    else{
        const age = getAge(birthdayValue);
        resultE1.innerText= `Your age is ${age} ${age >1 ? "years" : "year" } old`;
        

    }
   
}
function getAge(birthdayValue){
    const currentDate= new Date();
    const birthdayDate = new Date(birthdayValue);
    let age =currentDate.getFullYear()-birthdayDate.getFullYear();
    const month = currentDate.getMonth()-birthdayDate.getMonth();
    if(month<0 || (month=== 0 && currentDate.getDate()<birthdayDate.getDate())){
        age--;
    }
   


    return age;
}

btnE1.addEventListener("click",calculateAge);

