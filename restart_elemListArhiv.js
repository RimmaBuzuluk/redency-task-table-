function restart_elemListArihiv() {
  const generateElemArhiv = (name, created, categor, contest, data) => {
    return `
      <tr class="new_table_afhiv">
          <th class="name_back">${name}</th>
          <th class="created_back">${created}</th>
          <th class="categor_back">${categor}</th>
          <th class="contest_back">${contest}</th>
          <th class="data_back">${data}</th>
          <th class="main__img">
                    <img src="https://cdn-icons-png.flaticon.com/512/13/13964.png" alt="">
        </th>
       </tr>
      `;
  };

  const elemTableArhiv = elemListArhiv
    .map((el_a) => {
      return generateElemArhiv(
        el_a.name,
        el_a.created,
        el_a.categor,
        el_a.contest,
        el_a.data
      );
    })
    .join("");
  tbody_arh.innerHTML = elemTableArhiv;

  ///////дає можливість фрхівувати елементи навіть після додавання
  const btnsArhBack = document.querySelectorAll(".main__img");
  btnsArhBack.forEach((btn) => {
    btn.addEventListener("click", backInMainTable);
  });
}
