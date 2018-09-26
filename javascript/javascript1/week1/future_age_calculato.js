const yearOfBirth=1987;
let yearFuture;
var age;
yearFuture=prompt('enter futur age year',2027);
if(yearFuture>yearOfBirth){
age=yearFuture-yearOfBirth;
console.log('my  age is '+age ,'by  the year' +yearFuture);
}
else{
    console.log('please enter a valued year');
}
