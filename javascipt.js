const elemList = [
  {
    name: "name_1",
    created: 2015,
    categor: "pink",
    contest: "Task",
    dates: "18.10.2022",
  },
  {
    name: "Name",
    created: 2065,
    categor: "blue",
    contest: "Wark",
    dates: "05.10.2021",
  },
  {
    name: "Hello",
    created: 2654,
    categor: "blue",
    contest: "Task",
    dates: "03.03.2022",
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

// restart_elemListArihiv();
const generateElem = (name, created, categor, contest, dates) => {
  return `
    <tr class="new_table" style="color:black;">
        <th class="name" >${name}</th>
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

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
/////////////////////////// СОЗДАНИЕ АРХТВА

///////create element in table///////
const tbody_arh = document.createElement("tbody");
//Додати до нього класс;
tbody_arh.classList.add("tbody_arhive");

//помітити його в середину тега table
let table = document.getElementById("table_arh");
table.appendChild(tbody_arh);

const elemListArhiv = [
  {
    name: "Arhive name",
    created: 2015,
    categor: "rad",
    contest: "Task",
    dates: "08.07.2020",
  },
];

const generateElemArhiv = (name, created, categor, contest, dates) => {
  return `
    <tr class="new_table_afhiv">
        <th class="name_back">${name}</th>
        <th class="created_back">${created}</th>
        <th class="categor_back">${categor}</th>
        <th class="contest_back">${contest}</th>
        <th class="dates_back">${dates}</th>
        <th class="back_img">
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

/////////////////////////////////////////
/////

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

  let colorStyle = change_elem.style.color;
  console.log(colorStyle);

  if (colorStyle == "black") {
    change_elem.style.color = " ";
    change_elem.style.color = "gray";
    change_elem.setAttribute("contenteditable", true);
    change_elem.style.border = "2px solid black";
    change_elem.style.background = "#F8F8F8";
  } else {
    change_elem.removeAttribute("contenteditable");
    change_elem.style.color = " ";
    change_elem.style.color = "black";
    change_elem.style.border = "none";
    change_elem.style.background = "none";
  }

  number();
}
