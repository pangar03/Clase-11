const userName = prompt("Ingrese su nombre:");
const userSurname = prompt("Ingrese su apellido:");
const userBirthYear = parseInt(prompt("Ingrese su año de nacimiento:"));
const userAge = 2024 - userBirthYear;
const userBirthMonth = prompt("Ingrese su mes de nacimiento:");
const userBirthDay = prompt("Ingrese su dia de nacimiento:");

console.log("Mi nombre es", userName, userSurname + ",", "mi edad es", userAge, "años y naci el", userBirthDay, "de", userBirthMonth, "de", userBirthYear);