/////////////////////////////////УДАЛЕНИЕ ЭЛЕМЕНТА ИЗ ГЛАВНОГО МАССИВА
//коли кнопка нажата-видаляти карточку із структури DOM

//1.Обрати всі кнопки виделення

const buttons_del = document.querySelectorAll(".btn_del");

buttons_del.forEach((buttons_del) => {
  console.log("listener");
  buttons_del.addEventListener("click", deleteButt);
});

function deleteButt(e) {
  console.log("butt");
  const currentButtonDel = e.currentTarget;
  //видылити з тега объект
  const div_elem = currentButtonDel.closest(".new_table");
  console.log(div_elem);
  const string_index = div_elem.rowIndex; //индекс выбраной строки
  console.log(string_index);
  elemList.splice(string_index - 1, 1);
  console.log(elemList);
  //видалити з екрану
  currentButtonDel.closest(".new_table").remove();
  number();
}
