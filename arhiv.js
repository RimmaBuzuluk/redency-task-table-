////////////////ДОБАВЛЕНИЕ НОВОГО ЭЛЕМЕНА В АРХИВ
//коли кнопка нажата-видаляти карточку із структури main та додати в arhiv
//1.Обрати всі кнопки архіву

const buttons_arh = document.querySelectorAll(".btn_arh");
// console.log(buttons_arh);

//2.Створити функцію архівації
function handlClickArhiv(e) {
  const currentButton = e.currentTarget;
  //видылити з тега объект
  const div_elem = currentButton.closest(".new_table");
  //   console.log(div_elem);
  const string_index = div_elem.rowIndex; //индекс выбраной строки
  //   console.log(string_index);
  //////////////////////////////////////
  const name =
    document.getElementsByClassName("name")[string_index - 1].innerHTML;
  //   console.log(name);
  const created =
    document.getElementsByClassName("created")[string_index - 1].innerHTML;
  //   console.log(created);
  const categor =
    document.getElementsByClassName("category")[string_index - 1].innerHTML;
  console.log(categor);
  const contest =
    document.getElementsByClassName("content")[string_index - 1].innerHTML;
  //   console.log(contest);
  // const dates = document.getElementsByClassName("datam");
  // console.log("dates", dates);
  //   console.log(elemList);
  ///////////////////////////////////////////////////
  let new_elem = {
    name: name,
    created: created,
    categor: categor,
    contest: contest,
    dates: "12.09",
  };
  //запушити элемент  в нову таблицю
  elemListArhiv.push(new_elem);
  //видалити едеменнт зі старої таблиці

  currentButton.closest(".new_table").remove();
  //обновити  таблицю
  elemList.splice(string_index - 1, 1);
  restart_elemListArihiv();

  number();
  // back();
}

//3.використовувати цикл щоб додати обробник події до кожної кнопки
buttons_arh.forEach((buttons_arh) => {
  buttons_arh.addEventListener("click", handlClickArhiv);
});
