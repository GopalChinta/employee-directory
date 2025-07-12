// static/js/pagination.js

let currentPage = 1;
let itemsPerPage = 10;

document.getElementById("itemsPerPage").addEventListener("change", function () {
  itemsPerPage = parseInt(this.value);
  currentPage = 1;
  paginate();
});

function paginate() {
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginated = employees.slice(start, end);
  renderEmployees(paginated);
  renderPagination(employees.length);
}

function renderPagination(totalItems) {
  const container = document.getElementById("pagination");
  const pageCount = Math.ceil(totalItems / itemsPerPage);
  container.innerHTML = "";

  for (let i = 1; i <= pageCount; i++) {
    const btn = document.createElement("button");
    btn.innerText = i;
    btn.onclick = () => {
      currentPage = i;
      paginate();
    };
    container.appendChild(btn);
  }
}

window.onload = () => {
  paginate();
};

