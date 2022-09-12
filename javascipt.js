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
        <th сlass="data_">${dates}</th>
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

//коли кнопка нажата-видаляти карточку із структури DOM
//1.Обрати всі кнопки

const buttons_del = document.querySelectorAll(".btn_del");

//2.Створити функцію відалення
function handlClick(e) {
  const currentButton = e.currentTarget;
  currentButton.closest(".new_table").remove();
  //console.log(currentButton.parentElement);
}
//3.використовувати цикл щоб додати обробник події до кожної кнопки
buttons_del.forEach((buttons_del) => {
  buttons_del.addEventListener("click", handlClick);
});

// /////////////////архив

///////////////////////

///////create element in table///////
const tbody_arh = document.createElement("tbody");
//Додати до нього класс;
tbody_arh.classList.add("tbody_arhive");

//помітити його в середину тега table
let table = document.getElementById("table_arh");
table.appendChild(tbody_arh);

const elemListArhiv = [
  {
    name: "ssss",
    created: 2015,
    categor: "slss",
    contest: "sslsl",
    dates: "s,sks",
  },
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

////////////////////////////////////////////////
function newElementCreate() {
  const tr_new = document.createElement("tr");
  tr_new.classList.add("newElement");
  let tbody_new = document.getElementById("tbody");
  tbody_new.appendChild(tr_new);

  const elemListNew = [
    {
      name: "new",
      created: "nwe",
      categor: "new",
      contest: "nwe",
      dates: "new",
    },
  ];

  const generateElemNew = (name, created, categor, contest, dates) => {
    return `
    <tr class="new_element">
        <th>${name}</th>
        <th>${created}</th>
        <th>${categor}</th>
        <th>${contest}</th>
        <th>${dates}</th>
        <th class="btn">
            <button class="btn_arh" ><img src="https://cdn-icons-png.flaticon.com/512/1732/1732309.png" alt=""></button>
            <button class="btn_del"><img src="https://cdn-icons-png.flaticon.com/512/70/70757.png" alt=""></button>
            <button class="btn_red"><img src="https://w7.pngwing.com/pngs/672/1022/png-transparent-writing-computer-icons-blog-write-miscellaneous-angle-text.png"></button>
        </th>

     </tr>
    `;
  };

  const elemTableNew = elemListNew
    .map((el_new) => {
      return generateElemNew(
        el_new.name,
        el_new.created,
        el_new.categor,
        el_new.contest,
        el_new.dates
      );
    })
    .join("");
  tr_new.innerHTML = elemTableNew;
}

//коли кнопка нажата-видаляти карточку із структури main та додати в arhiv
//1.Обрати всі кнопки архіву

const buttons_arh = document.querySelectorAll(".btn_arh");
// console.log(buttons_arh);

//2.Створити функцію архівації
function handlClick(e) {
  const currentButton = e.currentTarget;
  //видылити з тега объект
  const div_elem = currentButton.closest(".new_table");
  console.log(div_elem);
  const string_index = div_elem.rowIndex; //индекс выбраной строки
  console.log(string_index);
  //////////////////////////////////////
  const name =
    document.getElementsByClassName("name")[string_index - 1].innerHTML;
  console.log(name);
  const created =
    document.getElementsByClassName("created")[string_index - 1].innerHTML;
  console.log(created);
  const categor =
    document.getElementsByClassName("category")[string_index - 1].innerHTML;
  console.log(categor);
  const content =
    document.getElementsByClassName("content")[string_index - 1].innerHTML;
  console.log(content);
  const data =
    document.getElementsByClassName("data_")[string_index - 1].innerHTML;
  console.log(data);

  ///////////////////////////////////////////////////

  //запушити элемент  в нову таблицю
  // elemListArhiv.push(elemForPush);
  //видалити едеменнт зі старої таблиці
  currentButton.closest(".new_table").remove();
  //обновити  таблицю
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

  // console.log(currentButton.parentElement);
}

//3.використовувати цикл щоб додати обробник події до кожної кнопки
buttons_arh.forEach((buttons_arh) => {
  buttons_arh.addEventListener("click", handlClick);
});
