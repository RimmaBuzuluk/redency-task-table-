function restart_elemList() {
  const generateElem = (name, created, categor, contest, dates) => {
    return `
    <tr class="new_table">
        <th class="name" contenteditable="true">${name}</th>
        <th class="created">${created}</th>
        <th class="category">${categor}</th>
        <th class="content">${contest}</th>
        <th сlass="datam">${dates}</th>
        <th class="btn">
            <button class="btn_arh" ><img src="https://cdn-icons-png.flaticon.com/512/1732/1732309.png" alt=""></button>
            <button class="btn_del"><img src="https://cdn-icons-png.flaticon.com/512/70/70757.png" alt=""></button>
            <button class="btn_red"><img src="https://w7.pngwing.com/pngs/672/1022/png-transparent-writing-computer-icons-blog-write-miscellaneous-angle-text.png"></button>
        </th>
     </tr>   
    `;
  };

  const elemTable = elemList
    .map((el) => {
      return generateElem(
        el.name,
        el.created,
        el.categor,
        el.contest,
        el.dates
      );
    })
    .join("");
  tbody.innerHTML = elemTable;

  number();

  // 3.використовувати цикл щоб додати обробник події до кожної кнопки
  buttons_back.forEach((buttons_back) => {
    buttons_back.addEventListener("click", backInMainTable);
  });

  ///////дає можливість видаляти елементи навіть після додавання
  const btnsDel = document.querySelectorAll(".btn_del");
  btnsDel.forEach((btn) => {
    btn.addEventListener("click", deleteButt);
  });

  ///////дає можливість фрхівувати елементи навіть після додавання
  const btnsArh = document.querySelectorAll(".btn_arh");
  btnsArh.forEach((btn) => {
    btn.addEventListener("click", handlClickArhiv);
  });
}
// restart_elemList()
