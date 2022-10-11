const buttons_change = document.querySelectorAll(".btn_red");
console.log(buttons_change);

buttons_change.forEach((buttons_change) => {
  buttons_change.addEventListener("click", changeButt);
});

function changeButt(e) {
  const currentButtonChange = e.currentTarget;
  //видылити з тега объект
  const change_elem = currentButtonChange.closest(".new_table");
  console.log(change_elem);
  const string_index = change_elem.rowIndex; //индекс выбраной строки
  console.log(string_index);

  const name_change =
    document.getElementsByClassName("name")[string_index - 1].innerHTML;
  console.log(name_change);
  const created_change =
    document.getElementsByClassName("created")[string_index - 1].innerHTML;
  console.log(created_change);
  const categor_change =
    document.getElementsByClassName("category")[string_index - 1].innerHTML;
  console.log(categor_change);
  const contest_change =
    document.getElementsByClassName("content")[string_index - 1].innerHTML;
  console.log(contest_change);
  //   const dates_change =
  //     document.getElementsByClassName("datam")[string_index - 1].innerHTML;
  //   console.log(dates_change);

  number();
}
