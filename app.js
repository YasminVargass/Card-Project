const button = document.querySelector(".addModal");
const modal = document.querySelector(".modal");
const modalContainer = document.querySelector(".modalContainer");
const mainCard = document.querySelector("#mainCard");
const form = document.querySelector("#modalForm");
const modalButtonSend = document.querySelector(".modalButtonSend");
const modalButtonCancel = document.querySelector(".modalButtonCancel");
const closeB = document.querySelector(".closeButton");

let save = [];
const nameInput = form.elements.name;
const docName = form.elements.doctorName;
const doctor = form.elements.doctor;
const dateForm = form.elements.dateForm;
const hourForm = form.elements.hourForm;

function modalEvents() {
  button.addEventListener("click", function (e) {
    openModal();
  });

modalButtonSend.addEventListener("click", function (evt) {
    if (form.checkValidity()) {
      addCard();
      closeModal();
    } else {
      alert("Por favor, preencha todos os campos obrigatórios.");
    }
  });

  modalButtonCancel.addEventListener("click", (event) => {
    console.log("tst");
    closeModal();
  });

  modalButtonCancel.addEventListener("click", (event) => {
    console.log("test");
    closeModal();
  });
}

function openModal() {
  modalContainer.style.backgroundColor = `rgba(${0}, ${0}, ${0}, ${0.5})`;
  modalContainer.style.display = "flex";
}

function closeModal() {
  modalContainer.style.backgroundColor = "none";
  modalContainer.style.display = "none";
  form.reset();
}

function addCard() {
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

  updateLocalStorage();
}

function updateLocalStorage() {
  let cards = getLocalStorage();

  cards.push({
    name: nameInput.value,
    docName: docName.value,
    doctor: doctor.value,
    dateForm: dateForm.value,
    hourForm: hourForm.value,
  });

  let json_cards = JSON.stringify(cards);

  localStorage.setItem("cards", json_cards);
}

function getLocalStorage() {
  let json_cards = localStorage.getItem("cards");

  if (json_cards) {
    let cards = JSON.parse(json_cards);

    return cards;
  }

  return [];
}

function loadCard() {
  let cards = getLocalStorage();

  for (let info of cards) {
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

    name.innerText = info.name;
    docNameCard.innerText = info.docName;
    doc.innerText = info.doctor;
    date.innerText = info.dateForm;
    hour.innerText = info.hourForm;

    ul.append(name);
    ul.append(docNameCard);
    ul.append(doc);
    ul.append(hour);
    ul.append(date);
  }
}

loadCard();
modalEvents();
