function restart_newName(string_index) {
  //////////////работа с новыми и старыми значениями
  ////получаем номер строки которую изменяем
  console.log(
    "название новое ",
    document.getElementsByClassName("name")[string_index - 1].innerHTML
  );
  number();
  console.log("старое название", elemList[string_index - 1].name);

  elemList[string_index - 1].name =
    document.getElementsByClassName("name")[string_index - 1].innerHTML;
  elemList[string_index - 1].created =
    document.getElementsByClassName("created")[string_index - 1].innerHTML;
  elemList[string_index - 1].categor =
    document.getElementsByClassName("category")[string_index - 1].innerHTML;
  elemList[string_index - 1].contest =
    document.getElementsByClassName("content")[string_index - 1].innerHTML;
  //   elemList[string_index - 1].dates =
  //     document.getElementsByClassName("datam")[string_index - 1].innerHTML;

  console.log(
    "название новое ",
    document.getElementsByClassName("name")[string_index - 1].innerHTML
  );
  number();
  console.log("старое название", elemList[string_index - 1].name);
}
