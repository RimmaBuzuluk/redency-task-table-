/////////////////////////ДОБАВЛЕНИЕ НОВОГО ЭЛЕМЕНТА
function newElementCreate() {
  const elemListNew = {
    name: "new",
    created: "nwe",
    categor: "new",
    contest: "nwe",
    dates: "new",
  };
  elemList.push(elemListNew);
  //   console.log(elemList);

  const generateElemNew = (name, created, categor, contest, dates) => {
    return `
      <tr class="new_table">
          <th class="name">${name}</th>
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
      return generateElemNew(
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

  // let tbody_ar = document.getElementById("id_arh");
}
