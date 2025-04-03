var studentId = 1;

function addStudent() {
    var nameInput = document.getElementById("studentName");
    var ageInput = document.getElementById("studentAge");
    var nameError = document.getElementById("nameError");
    var ageError = document.getElementById("ageError");

    var name = nameInput.value.trim();
    var age = parseInt(ageInput.value.trim());

    nameError.innerHTML = "";
    ageError.innerHTML = "";

    if (name === "") {
        nameError.innerHTML = " Student Name is Required!";
        return;
    }
    if (name.length <= 2) {
        nameError.innerHTML = " Name Length Must be greater than 2!";
        return;
    }
    if (!age) {
        ageError.innerHTML = " Age is Required!";
        return;
    }
    if (age <= 18) {
        ageError.innerHTML = " Age Must be greater than 18!";
        return;
    }



    var table = document.getElementById("studentTable").getElementsByTagName("tbody")[0];
    var newRow = document.createElement("tr");
    var rows = table.getElementsByTagName("tr");


    for (var i = 0; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName("td");
        var existingName = cells[1].textContent;
        var existingAge = parseInt(cells[2].textContent);

        if (existingName === name && existingAge === age) {
            nameError.innerHTML = "This student is already added!";
            return;
        }
    }

    var idCell = document.createElement("td");
    idCell.textContent = studentId;
    newRow.append(idCell);

    var nameCell = document.createElement("td");
    nameCell.textContent = name;
    newRow.append(nameCell);

    var ageCell = document.createElement("td");
    ageCell.textContent = age;
    newRow.append(ageCell);

    var actionCell = document.createElement("td");
    var deleteBtn = document.createElement("span");
    deleteBtn.textContent = "Delete Student";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function() {
        deleteStudent(this);
    };
    actionCell.append(deleteBtn);
    newRow.append(actionCell);

    table.append(newRow);
}

function deleteStudent(element) {
    var row = element.parentElement.parentElement;
    row.remove();
}