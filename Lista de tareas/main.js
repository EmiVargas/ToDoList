const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ulToday = document.querySelector(".ulToday");
const ulTom = document.querySelector(".ulTom");
const ulPm = document.querySelector(".ulPm");
const emptyTod = document.querySelector(".empty-today");
const emptyTom = document.querySelector(".empty-tom");
const emptyPm = document.querySelector(".empty-pm");
const select = document.querySelector("select");
const categoria = document.querySelector(".categoria")
const completedUl = document.querySelector(".completed-ul");



addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const text = input.value;
  if (text !== "") {
    input.value = "";
    const li = document.createElement("li");
    const p = document.createElement("p");
    const leg = document.createElement("legend");
    leg.textContent = categoria.value;
    p.textContent = text;
    li.appendChild(leg);
    li.appendChild(p);
    
if(select.value == "Hoy"){
    emptyTod.style.display = "none";
    ulToday.appendChild(li);
    li.appendChild(addDeleteBtn());
    li.appendChild(addCompleteBtn());
  }
  if(select.value == "Mañana"){
    emptyTom.style.display = "none";
    ulTom.appendChild(li);
    li.appendChild(addDeleteBtn2());
    li.appendChild(addCompleteBtn2());
  }
  if(select.value == "Después"){
    emptyPm.style.display = "none";
    ulPm.appendChild();
    li.appendChild(addDeleteBtn3());
    li.appendChild(addCompleteBtn3());
  }
}
});

function addDeleteBtn() {
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "Eliminar";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ulToday.removeChild(item);
    
    const items = document.querySelectorAll("li");

    if (items.length == 0) {
      emptyTod.style.display = "block";
    }
    
  });
  return deleteBtn;
}



function addCompleteBtn(){
  const completeBtn = document.createElement("button");
  
  completeBtn.textContent="Completar";
  completeBtn.className="btn-completed";
 
  completeBtn.addEventListener("click", (e) =>{

    const item = e.target.parentElement;
    ulToday.removeChild(item);

    const li = document.createElement("li");
    const p = document.createElement("p");

    p.textContent = item.textContent;
    li.appendChild(p);
    completedUl.appendChild(li);
  });
  return completeBtn;
}


function addDeleteBtn2() {
    const deleteBtn = document.createElement("button");
    

    deleteBtn.textContent = "Eliminar";
    deleteBtn.className = "btn-delete";
  
    deleteBtn.addEventListener("click", (e) => {
      const item = e.target.parentElement;
      ulTom.removeChild(item);
      const items = document.querySelectorAll("li");

    if (items.length == 0) {
      emptyTom.style.display = "block";
    }
    });
    return deleteBtn;
  }

  function addDeleteBtn3() {
    const deleteBtn = document.createElement("button");
  
    deleteBtn.textContent = "Eliminar";
    deleteBtn.className = "btn-delete";
  
    deleteBtn.addEventListener("click", (e) => {
      const item = e.target.parentElement;
      ulPm.removeChild(item);
      const items = document.querySelectorAll("li");

    if (items.length == 0) {
      emptyPm.style.display = "block";
    }
    });
    return deleteBtn;
  }
