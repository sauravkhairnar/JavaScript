let age =prompt("Entert your  age ")
age=Number.parseInt(age)
let canDrive=(age)=>{
    return age>=18
}
if (canDrive(age))
{
    alert("Yes You Can drive");
}
else{
    alert("You can not drive");
}