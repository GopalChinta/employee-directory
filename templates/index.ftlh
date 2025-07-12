<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Employee Directory</title>
  <link rel="stylesheet" href="static/css/style.css">
</head>
<body>
  <h1>Employee Directory</h1>
  <div>
    <input type="text" id="search" placeholder="Search by name or email">
    <button onclick="toggleFilter()">Filter</button>
    <select id="itemsPerPage">
      <option value="10">10</option>
      <option value="25">25</option>
      <option value="50">50</option>
    </select>
  </div>
  <div id="filter-panel" style="display: none;">
    <input type="text" id="filterName" placeholder="First Name">
    <input type="text" id="filterDept" placeholder="Department">
    <input type="text" id="filterRole" placeholder="Role">
    <button onclick="applyFilters()">Apply</button>
    <button onclick="clearFilters()">Clear</button>
  </div>
  <div class="employee-grid" id="employeeGrid"></div>
  <div id="pagination"></div>

  <div id="formModal" style="display: none;">
    <form id="employeeForm">
      <input type="hidden" id="employeeId">
      <input type="text" id="firstName" placeholder="First Name" required>
      <input type="text" id="lastName" placeholder="Last Name" required>
      <input type="email" id="email" placeholder="Email" required>
      <input type="text" id="department" placeholder="Department" required>
      <input type="text" id="role" placeholder="Role" required>
      <button type="submit">Save</button>
      <button type="button" onclick="closeForm()">Cancel</button>
    </form>
  </div>

  <button onclick="openForm()">Add Employee</button>

  <script src="static/js/data.js"></script>
  <script src="static/js/app.js"></script>
  <script src="static/js/form.js"></script>
  <script src="static/js/filter.js"></script>
  <script src="static/js/pagination.js"></script>
</body>
</html>
