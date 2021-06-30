// Задана цепочка вызовов.
// greeting().then(f1).then(f2).then(f3);
// Вам нужно написать реализацию даннлой конструкции, 
// чтоб её вызов вывел на экран фразу
// Hello, I have realised how promises work!
// При этом:
// Слово "Hello" должно появится на экране сразу после вызова данной конструкции, 
// а все остальные слова по очереди, с переодичностью не раньше чем 1 секунда.

const container = document.getElementById("container");

function delayPromise(text, target, delay) {
	setTimeout(() => {
		target.insertAdjacentHTML("beforeend", `<span>${text}</span>`);

	}, delay)

}

function greeting() {
	container.insertAdjacentHTML("beforeend", '<span>Hello, </span>');
	return new Promise((resolve, reject) => {
		resolve()
	})
}

function f1() {

	return new Promise((resolve, reject) => {

		resolve(delayPromise('I have realised', container, 1000))
	})
}

function f2() {

	return new Promise((resolve, reject) => {

		resolve(delayPromise(' how promises', container, 2000))
	})
}

function f3() {

	return new Promise((resolve, reject) => {

		resolve(delayPromise(' work! ', container, 3000))
	})
	
}


greeting().then(f1).then(f2).then(f3);

