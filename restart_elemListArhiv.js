function restart_elemListArihiv() {
  const generateElemArhiv = (name, created, categor, contest, dates) => {
    return `
      <tr class="new_table_afhiv">
          <th class="name_back">${name}</th>
          <th class="created_back">${created}</th>
          <th class="categor_back">${categor}</th>
          <th class="contest_back">${contest}</th>
          <th class="dates_back">${dates}</th>
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
        el_a.dates
      );
    })
    .join("");
  tbody_arh.innerHTML = elemTableArhiv;
}
