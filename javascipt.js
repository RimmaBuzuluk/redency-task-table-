const elemList = [
  {
    name: "Hello",
    created: 2015,
    categor: "червоний ",
    contest: "ghgj",
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
    contest: "map",
    dates: "llll",
  },
];

const tr = document.createElement("tr");
//Додати до нього класс wrapper;
tr.classList.add("newElement");

//помітити його в середину тега body
let tbody = document.getElementById("tbody");
tbody.appendChild(tr);

//яка приймає 5 аргументів
const generateElem = (name, created, categor, contest, dates) => {
  return `
    <tr>
        <th>${name}</th>
        <th>${created}</th>
        <th>${categor}</th>
        <th>${contest}</th>
        <th>${dates}</th>
     </tr>   
    `;
};

const elemTable = elemList
  .map((el) => {
    return generateElem(el.name, el.created, el.categor, el.contest, el.dates);
  })
  .join("");

tbody.innerHTML = elemTable;
