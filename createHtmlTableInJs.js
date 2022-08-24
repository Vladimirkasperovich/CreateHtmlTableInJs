//Дана пустая HTML таблица. С помощью двух вложенных циклов for заполните эту таблицу 5-ю рядами с 5-ю колонками.
/*let table = document.querySelector('#table');

for (let i = 0; i < 5; i++){
    let tr = document.createElement('tr');

    for (let i = 0; i < 5; i++){
        let td = document.createElement('td');
        tr.appendChild(td)
    }
    table.appendChild(tr)
}*/




//Модифицируйте предыдущую задачу так, чтобы таблица создавалась размером 10 рядов на 5 колонок.
/*let table = document.querySelector('#table');

for (let i = 0; i < 5; i++){
  let tr = document.createElement('tr');

  for (let i = 0; i < 10; i++){
    let td = document.createElement('td');
    tr.appendChild(td);

  }
  table.appendChild(tr);
}*/



//Модифицируйте предыдущую задачу так, чтобы в каждую td добавлялся текст 'x'
/*let table = document.querySelector('#table');

for (let i = 0; i < 5; i++){
    let tr = document.createElement('tr');

    for (let i = 0; i < 10; i++){
        let td = document.createElement('td');
        td.textContent = 'x';
        tr.appendChild(td);
    }
    table.appendChild(tr);
}*/



//Реализуйте генератор таблиц, ширина и высота таблиц задается в двух инпутах (например, таблица 5 на 10 ячеек).
/*let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let btn = document.querySelector('#btn');
let table = document.querySelector('#table');


btn.addEventListener('click', function () {
    let num1 = Number(input1.value);
    let num2 = Number(input2.value);

    for (let i = 0; i < num1; i++) {
        let tr = document.createElement('tr');

        for (let i = 0; i < num2; i++) {
            let td = document.createElement('td');
            td.textContent = '7'
            tr.appendChild(td);
            table.append(tr);
        }
        table.append(tr);

    }


})*/



//Выведите на экран HTML таблицу размером 5 рядов на 5 колонок так, чтобы в ее ячейках последовательно стояли числа от 1 до 25.
/*let table = document.querySelector('#table');
let k = 1;

for (let i = 0; i < 5; i++){
    let tr = document.createElement('tr');

    for (let i = 0; i < 5; i++){
        let td = document.createElement('td');
        td.textContent = k;
        k++;

        tr.appendChild(td);

        
    }
    table.appendChild(tr)
}*/



//Модифицируйте предыдущую задачу так, чтобы в ячейках таблицы были записаны четные числа в промежутке от 2 до 50.
/*let table = document.querySelector('#table');


for (let k = 2; k <= 50; k++) {

    for (let i = 0; i < 5; i++) {
        let tr = document.createElement('tr');

        for (let i = 0; i < 5; i++) {
            let td = document.createElement('td');
            if (k % 2 == 0) {
                td.textContent = k;
                tr.appendChild(td);
            }



        }
        table.appendChild(tr)
    }

}*/ 
