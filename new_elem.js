/////////////////////////ДОБАВЛЕНИЕ НОВОГО ЭЛЕМЕНТА
function newElementCreate() {
  const elemListNew = {
    name: "new",
    created: "nwe",
    categor: "new",
    contest: "nwe",
    data: "new",
  };
  elemList.push(elemListNew);
  //   console.log(elemList);

  restart_elemList();
  number();
}
