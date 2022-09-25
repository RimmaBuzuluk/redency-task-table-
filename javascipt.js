const elemList = [
  {
    name: "Hello",
    created: 2015,
    categor: "червоний ",
    contest: "Task",
    dates: "ddff",
  },
  {
    name: "lddkdd",
    created: 2065,
    categor: "dldldpd ",
    contest: "ghgj",
    dates: "ddff",
  },
  {
    name: "Booo",
    created: 2654,
    categor: "dldkdj",
    contest: "Task",
    dates: "llll",
  },
];

///////create element in table///////
const tr = document.createElement("tr");
//Додати до нього класс wrapper;
tr.classList.add("newElement");

//помітити його в середину тега body
let tbody = document.getElementById("tbody");
tbody.appendChild(tr);

//яка приймає 5 аргументів
const generateElem = (name, created, categor, contest, dates) => {
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
    return generateElem(el.name, el.created, el.categor, el.contest, el.dates);
  })
  .join("");
tbody.innerHTML = elemTable;

let tbody_ar = document.getElementById("id_arh");

// /////////////////
///////////////////////
///////////////////////
///////////////////////////////////
/////////////////////////// СОЗДАНИЕ АРХТВА

///////create element in table///////
const tbody_arh = document.createElement("tbody");
//Додати до нього класс;
tbody_arh.classList.add("tbody_arhive");

//помітити його в середину тега table
let table = document.getElementById("table_arh");
table.appendChild(tbody_arh);

const elemListArhiv = [
  // {
  //   name: "ssss",
  //   created: 2015,
  //   categor: "slss",
  //   contest: "sslsl",
  //   dates: "s,sks",
  // },
];

const generateElemArhiv = (name, created, categor, contest, dates) => {
  return `
    <tr class="new_table_afhiv">
        <th>${name}</th>
        <th>${created}</th>
        <th>${categor}</th>
        <th>${contest}</th>
        <th>${dates}</th>

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
