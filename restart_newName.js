function restart_newName(string_index) {
  //////////////работа с новыми и старыми значениями
  ////получаем номер строки которую изменяем
  n = string_index;
  console.log(string_index);
  console.log(
    "название новое ",
    document.getElementsByClassName("name")[n - 1].innerHTML
  );
  number();
  console.log("старое название", elemList[n - 1].name);
}
