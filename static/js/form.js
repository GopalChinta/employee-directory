// static/js/form.js

document.getElementById("employeeForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const id = document.getElementById("employeeId").value;
  const newEmp = {
    id: id ? parseInt(id) : Date.now(),
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    email: document.getElementById("email").value,
    department: document.getElementById("department").value,
    role: document.getElementById("role").value
  };

  if (id) {
    const index = employees.findIndex(e => e.id === parseInt(id));
    employees[index] = newEmp;
  } else {
    employees.push(newEmp);
  }

  closeForm();
  renderEmployees(employees);
});
