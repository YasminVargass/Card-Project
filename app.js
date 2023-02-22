const button = document.querySelector(".addModal");
const modal = document.querySelector(".modal");
const modalContainer = document.querySelector(".modalContainer");
const form = document.querySelector("#modalForm");
const modalButtonSend = document.querySelector(".modalButtonSend");
const modalButtonCancel = document.querySelector(".modalButtonCancel");

let openModal = () => {
  modalContainer.style.backgroundColor = `rgba(${0}, ${0}, ${0}, ${0.5})`;
  modalContainer.style.display = "flex";
};

const nameInput = form.elements.name;
const docName = form.elements.doctorName;
const doctor = form.elements.doctor;
const dateForm = form.elements.dateForm;
const hourForm = form.elements.hourForm;
const mainCard = document.querySelector("#mainCard");
const closeB = document.querySelector(".closeButton");

button.addEventListener("click", function (e) {
  openModal();
});

let save = [];

function add() {
  if (localStorage.meuArr) {
    save = JSON.parse(localStorage.getItem("meuArr")) || [];
  }
  let newName = document.querySelector("#name").value;
  let newDoctorName = document.querySelector("#doctorName").value;
  let newDoctor = document.querySelector("#doctor").value;
  let newDate = document.querySelector("#dateForm").value;
  let newHour = document.querySelector("#hourForm").value;
  save.push(newName);
  save.push(newDoctorName);
  save.push(newDoctor);
  save.push(newDate);
  save.push(newHour);
  localStorage.myArr = JSON.stringify(save);
}

function card() {
  const div = document.createElement("div");
  div.className = "cardContainer";
  mainCard.append(div);
  const ul = document.createElement("ul");
  ul.className = "ulCard";
  div.append(ul);
  const name = document.createElement("li");
  const docNameCard = document.createElement("li");
  const doc = document.createElement("li");
  const date = document.createElement("li");
  const hour = document.createElement("li");
  name.innerText = nameInput.value;
  docNameCard.innerText = docName.value;
  doc.innerText = doctor.value;
  date.innerText = dateForm.value;
  hour.innerText = hourForm.value;

  ul.append(name);
  ul.append(docNameCard);
  ul.append(doc);
  ul.append(date);
  ul.append(hour);

  add();
}

modalButtonSend.addEventListener("click", function (evt) {
  evt.preventDefault();
  card();

  modalContainer.style.backgroundColor = "none";
  modalContainer.style.display = "none";
  nameInput.value = "";
  docName.value = "";
  doctor.value = "";
  dateForm.value = "";
  hourForm.value = "";
});

modalButtonCancel.addEventListener("click", (event) => {
  event.preventDefault();
  modalContainer.style.backgroundColor = "none";
  modalContainer.style.display = "none";
});

closeB.addEventListener("click", (events) => {
  events.preventDefault();
  modalContainer.style.backgroundColor = "none";
  modalContainer.style.display = "none";
});

// function loadCard() {
//   if (localStorage.myArr) {
//     save = JSON.parse(localStorage.getItem("myArr"));
//   }
//   for (let info in save) {
//     const div = document.createElement("div");
//     div.className = "cardContainer";
//     mainCard.append(div);
//     const ul = document.createElement("ul");
//     ul.className = "ulCard";
//     div.append(ul);
//     const name = document.createElement("li");
//     const docNameCard = document.createElement("li");
//     const doc = document.createElement("li");
//     const date = document.createElement("li");
//     const hour = document.createElement("li");
//     name.innerText = save[i];
//     docNameCard.innerText = save[i];
//     doc.innerText = save[i];
//     date.innerText = save[i];
//     hour.innerText = save[i];

//     ul.append(name);
//     ul.append(docNameCard);
//     ul.append(doc);
//     ul.append(hour);
//     ul.append(date);
//   }
// }
// loadCard();
