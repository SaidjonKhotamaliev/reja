function itemTemplate(item) {
  return `<li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
    <span class="item-text">${item.reja}</span>
    <div class="d-flex justify-content-end">
    <button data-id="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1">
    Ozgartirish
    </button>
    <button data-id="${item._id}" class="btn btn-danger delete-me btn-sm">
    Ochirish
    </button>
    </div>
    </li>
    `;
}
let createField = document.querySelector("#create-field");

document.querySelector("#create-form").addEventListener("submit", (e) => {
  e.preventDefault();
  axios
    .post("/create-item", { reja: createField.value })
    .then((response) => {
      document
        .querySelector("#item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
      createField.value = "";
      createField.focus();
    })
    .catch((err) => {
      console.log("Iltimos qaytadan harakat qiling!");
    });
});
