


const myKey = localStorage.getItem('myKey');
if (!myKey) {

    let firstName = prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя', '');
    localStorage.setItem('name', firstName);
    localStorage.setItem('date', new Date().toLocaleString());
    console.log(localStorage.getItem('date'));
    localStorage.setItem('myKey', 'Not at first');
} else {
    let name = localStorage.getItem('name');
    let date = localStorage.getItem('date');
    alert(`Добрый день, ${name}! Давно не виделись. В последний раз вы были у нас ${date}`);
    localStorage.setItem('date', new Date().toLocaleString());


}