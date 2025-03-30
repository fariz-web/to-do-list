const inputBox = document.getElementById("inputBox");
const taskList = document.getElementById("taskList");
const addButton = document.getElementById("addButton");

const MAX_TASKS = 10; // Batas jumlah tugas

// Event listener untuk tombol "Tambah"
addButton.addEventListener("click", buttonTask);

// Event listener untuk Enter
inputBox.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        buttonTask();
    }
});

function buttonTask() {
    if (inputBox.value.trim() === '') {
        alert("Gaboleh kosong kocak!");
        return;
    }
    
    if (taskList.children.length >= MAX_TASKS) {
        alert("Tugas sudah penuh! Hapus dulu sebelum menambah yang baru.");
        return;
    }

    let li = document.createElement("li");
    li.classList.add("task-item");

    // Tambahkan checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("task-checkbox");
    checkbox.addEventListener("change", function() {
        li.classList.toggle("done", checkbox.checked);
    });

    // Tambahkan teks tugas
    let taskText = document.createElement("span");
    taskText.textContent = inputBox.value;

    // Tambahkan tombol hapus ❌
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.classList.add("delete-btn");
    deleteButton.onclick = function () {
        taskList.removeChild(li);
    };

    // Gabungkan elemen ke dalam <li>
    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(deleteButton);
    
    taskList.appendChild(li);

    inputBox.value = ""; // Kosongkan input setelah menambahkan tugas
}
