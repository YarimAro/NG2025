var quotes =[
    ['Желаю счастья и удачи'],
    ['Желаю здоровья и благосостояния'],
    ['Желаю любви и радости'],
    ['Пусть все желания исполнятся'],
    ['Пусть жизнь наполнится возможностями'],
    ['Пусть все цели легко достигаются'],
    ['Желаю искренних улыбок'],
    ['Желаю искренних друзей'],
    ['Желаю ярких дней'],
    ['Желаю ярких впечатлений'],
    ['Пусть окружение всегда поддержит'],
    ['Желаю вдохновения и творческих успехов'],
    ['Пусть всё приносит только пользу'],
    ['Пусть все дела идут легко и в радость'],
    ['Желаю чтоб мечты стали целями, что легко реализуются'],
    ['Желаю благосостояния и счастья'],
];

document.getElementById("next").onclick = function() {
    document.getElementById("frase").innerHTML=quotes[Math.floor(Math.random()*quotes.length)]
}
