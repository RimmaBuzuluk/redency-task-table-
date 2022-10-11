////////////////ПОВЕРНУТИ ЕЛЕМЕНТ З АРХІВУ ДО ОСНОВНОГО МАСИВУ
//коли кнопка нажата-видаляти карточку із arhiv і додавати до основного
//1.Обрати всі кнопки архіву
const buttons_back = document.querySelectorAll(".back_img");
// console.log(buttons_back);

//2.Створити функцію архівації
function backInMainTable(e) {
  const currentButton = e.currentTarget;
  //видылити з тега объект
  //   console.log(elemListArhiv);
  const div_elem_back = currentButton.closest(".new_table_afhiv");
  //   console.log(div_elem_back);
  const string_index = div_elem_back.rowIndex; //индекс выбраной строки
  //   console.log(string_index);
  ///створити новый елемет

  const name_back =
    document.getElementsByClassName("name_back")[string_index - 1].innerHTML;
  //   console.log(name_back);
  const created_back =
    document.getElementsByClassName("created_back")[string_index - 1].innerHTML;
  //   console.log(created_back);
  const categor_back =
    document.getElementsByClassName("categor_back")[string_index - 1].innerHTML;
  //   console.log(categor_back);
  const contest_back =
    document.getElementsByClassName("contest_back")[string_index - 1].innerHTML;
  //   console.log(contest_back);
  const dates_back =
    document.getElementsByClassName("dates_back")[string_index - 1].innerHTML;
  //   console.log(dates_back);

  let new_elem_back = {
    name: name_back,
    created: created_back,
    categor: categor_back,
    contest: contest_back,
    dates: dates_back,
  };

  //   console.log(new_elem_back);
  console.log(elemList);

  //додати елемент до основного масиву
  elemList.push(new_elem_back);
  console.log(elemList);

  //видалити елемент із масиву архіва
  currentButton.closest(".new_table_afhiv").remove();
  elemListArhiv.splice(string_index - 1, 1);

  console.log(elemListArhiv);

  restart_elemList();
  number();
}

// 3.використовувати цикл щоб додати обробник події до кожної кнопки
buttons_back.forEach((buttons_back) => {
  buttons_back.addEventListener("click", backInMainTable);
});
