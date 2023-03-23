const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ulToday = document.querySelector(".ulToday");
const ulTom = document.querySelector(".ulTom");
const ulPm = document.querySelector(".ulPm");
const emptyTo = document.querySelector(".emptyTo");
const emptyTm = document.querySelector(".emptyTm");
const emptyPm = document.querySelector(".emptyPm");
const emptyCo = document.querySelector(".emptyCo");
const select = document.querySelector("select");
const categoria = document.querySelector(".categoria");
const completedUl = document.querySelector(".completed-ul");
const selectsDiv = document.querySelector(".selects");
let completeBtn;

const newInput = document.createElement("input");
const label = document.createElement("label");
const div = document.createElement("div");
newInput.className = "newInput";
newInput.placeholder = "Escribe una nueva categoría";
newInput.display = "none";
newInput.value = "";


categoria.addEventListener("change", (e) => {
  e.preventDefault();

  if (categoria.value == "Agregar una categoría") {
    div.className = "inpDiv";
    label.textContent = "-Nueva categoría";
    div.appendChild(label);
    div.appendChild(newInput);
    newInput.display = "block";
    selectsDiv.appendChild(div);
  }
});

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const text = input.value;
  if (text !== "") {
    input.value = "";
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.className = "li-p";
    const leg = document.createElement("legend");

    if (categoria.value == "Agregar una categoría") {
      leg.textContent = newInput.value;
      newInput.value = "";
      categoria.selectedIndex = 0;
    } else {
      leg.textContent = categoria.value;
    }

    p.textContent = text;
    li.appendChild(leg);
    li.appendChild(p);

    if (select.value == "Hoy") {
      emptyTo.style.display = "none";
      ulToday.appendChild(li);
      li.appendChild(addDeleteBtn());
      li.appendChild(addCompleteBtn());
    }
    if (select.value == "Mañana") {
      emptyTm.style.display = "none";
      ulTom.appendChild(li);
      li.appendChild(addDeleteBtn());
      li.appendChild(addCompleteBtn());
    }
    if (select.value == "Después") {
      emptyPm.style.display = "none";
      ulPm.appendChild(li);
      li.appendChild(addDeleteBtn());
      li.appendChild(addCompleteBtn());
    }
  }
});

function addDeleteBtn() {
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "Eliminar";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    const ul = item.parentElement;
    item.parentElement.removeChild(item);

    const items = document.querySelectorAll("li");

    if (items.length == 0) {
      ul.appendChild(createEmpty());
    }
  });
  return deleteBtn;
}

function addCompleteBtn() {
  completeBtn = document.createElement("button");

  completeBtn.textContent = "Completar";
  completeBtn.className = "btn-completed";

  completeBtn.addEventListener("click", (e) => {
    e.preventDefault();

    emptyCo.className = "none";
    console.log(emptyCo.className);
    const item = e.target.parentElement;

    for (const child of item.children) {

      if (child.tagName == "P") {
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.textContent = child.textContent;
        li.appendChild(p);
        completedUl.appendChild(li);
      }
    }
    item.parentElement.removeChild(item);
  });

  return completeBtn;
}

function createEmpty(){
  const empty = document.createElement("div");
  const emptyText = document.createElement("p");
  emptyText.textContent = "No tienes tareas en esta lista";
  empty.appendChild(emptyText);
  return empty;
}
