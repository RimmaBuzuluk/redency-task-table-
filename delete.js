/////////////////////////////////УДАЛЕНИЕ ЭЛЕМЕНТА ИЗ ГЛАВНОГО МАССИВА
//коли кнопка нажата-видаляти карточку із структури DOM
//1.Обрати всі кнопки

const buttons_del = document.querySelectorAll(".btn_del");

//2.Створити функцію відалення
function handlClick(e) {
  const currentButton = e.currentTarget;
  currentButton.closest(".new_table").remove();
  //console.log(currentButton.parentElement);
  console.log(elemList);
}
//3.використовувати цикл щоб додати обробник події до кожної кнопки
buttons_del.forEach((buttons_del) => {
  buttons_del.addEventListener("click", handlClick);
});
