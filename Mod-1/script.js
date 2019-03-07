var myName = prompt('Введите Ваше имя:');
var myLastName = prompt ('Введите Вашу Фамилию:');

var currentDate = new Date();
var currentYear = currentDate.getFullYear();


alert('Добро пожаловать - ' + myName + ' ' + myLastName);
alert('На дворе: ' + currentYear + ' год');
