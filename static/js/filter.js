// static/js/filter.js

document.getElementById("search").addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase();
  const filtered = employees.filter(emp =>
    emp.firstName.toLowerCase().includes(searchTerm) ||
    emp.lastName.toLowerCase().includes(searchTerm) ||
    emp.email.toLowerCase().includes(searchTerm)
  );
  renderEmployees(filtered);
});

function toggleFilter() {
  const panel = document.getElementById("filter-panel");
  panel.style.display = panel.style.display === "none" ? "block" : "none";
}

function applyFilters() {
  const name = document.getElementById("filterName").value.toLowerCase();
  const dept = document.getElementById("filterDept").value.toLowerCase();
  const role = document.getElementById("filterRole").value.toLowerCase();

  const filtered = employees.filter(emp =>
    (name === "" || emp.firstName.toLowerCase().includes(name)) &&
    (dept === "" || emp.department.toLowerCase().includes(dept)) &&
    (role === "" || emp.role.toLowerCase().includes(role))
  );

  renderEmployees(filtered);
}

function clearFilters() {
  document.getElementById("filterName").value = "";
  document.getElementById("filterDept").value = "";
  document.getElementById("filterRole").value = "";
  renderEmployees(employees);
}

