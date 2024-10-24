let result; // Переменная для хранения результата проверки неравенств
let check = false; // Переменная для отслеживания, выполнены ли неравенства

// Получаем элементы ввода A, B и C из HTML
const elementA = document.getElementById("a");
const elementB = document.getElementById("b");
const elementC = document.getElementById("c");

// Функция для проверки неравенств
function verify() {
    let a = parseInt(elementA.value);
    let b = parseInt(elementB.value);
    let c = parseInt(elementC.value);

    // Проверка неравенств
    if (a < b && b < c) {
        result = "Выполняется неравенство: A < B < C"; // Устанавливаем результат, если первое неравенство выполняется
        check = true; // Устанавливаем флаг, что неравенство выполнено
    } else if (a < b && b > c) {
        result = "Выполняется неравенство: A < B > C"; // Устанавливаем результат, если второе неравенство выполняется
        check = true; // Устанавливаем флаг, что неравенство выполнено
    } else {
        result = "Ни одно из указанных неравенств не выполняется."; // Устанавливаем результат, если ни одно неравенство не выполняется
        check = false; // Устанавливаем флаг, что неравенство не выполнено
    }

    // Выводим результат на страницу
    document.getElementById("output").innerText = result; // Обновляем текст в элементе с id "output"
    document.getElementById("result").value = result; // Обновляем значение в поле результата
}

function send() {
    if (check) {
        let textCondition = document.getElementsByTagName('p')[0].innerText; // Получаем текст условия
        document.getElementsByName('formulation')[0].value = textCondition; // Устанавливаем значение в поле 'formulation'
        document.getElementsByName('result')[0].value = result; // Устанавливаем значение в поле 'result'

        // Отправляем форму
        document.getElementById("UserEnter").submit();
    } else {
        alert("Есть недостатки. Повторите ввод");
    }
}

// Функция для проверки и отправки
function verify_send() {
    verify(); // Проверяем неравенства
    send(); // Отправляем форму, если неравенства выполнены
}

// Добавляем обработчики событий
const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify); // Обработчик для кнопки "Проверить"

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', verify_send); // Обработчик для кнопки "Отправить"


