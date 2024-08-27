document.addEventListener("DOMContentLoaded", function() {
    const medicamentoFormContainer = document.getElementById("medicamentoFormContainer");
    const addBtn = document.getElementById("addBtn");
    const closeModal = document.getElementsByClassName("close")[0];
    const medicamentoForm = document.getElementById("medicamentoForm");
    const medicamentosTable = document.getElementById("medicamentosTable").getElementsByTagName('tbody')[0];
    let medicamentos = [];
    let editIndex = null;

    addBtn.onclick = function() {
        openForm();
    }

    closeModal.onclick = function() {
        closeForm();
    }

    window.onclick = function(event) {
        if (event.target == medicamentoFormContainer) {
            closeForm();
        }
    }

    medicamentoForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const medicamento = {
            nombre: document.getElementById("nombre").value,
            stock: document.getElementById("stock").value,
            fechaCaducidad: document.getElementById("fechaCaducidad").value,
        };

        if (editIndex !== null) {
            medicamentos[editIndex] = medicamento;
            editIndex = null;
        } else {
            medicamentos.push(medicamento);
        }

        updateTable();
        closeForm();
    });

    document.getElementById("search").addEventListener("input", function(event) {
        const searchTerm = event.target.value.toLowerCase();
        const filteredMedicamentos = medicamentos.filter(m => m.nombre.toLowerCase().includes(searchTerm));
        updateTable(filteredMedicamentos);
    });

    function updateTable(data = medicamentos) {
        medicamentosTable.innerHTML = "";
        data.forEach((medicamento, index) => {
            const row = medicamentosTable.insertRow();
            row.insertCell(0).innerText = medicamento.nombre;
            row.insertCell(1).innerText = medicamento.stock;
            row.insertCell(2).innerText = medicamento.fechaCaducidad;
            const editBtn = document.createElement("button");
            editBtn.innerText = "Editar";
            editBtn.onclick = function() {
                editMedicamento(index);
            };
            row.insertCell(3).appendChild(editBtn);
        });
    }

    function openForm() {
        medicamentoForm.reset();
        medicamentoFormContainer.style.display = "block";
    }

    function closeForm() {
        medicamentoFormContainer.style.display = "none";
    }

    function editMedicamento(index) {
        document.getElementById("nombre").value = medicamentos[index].nombre;
        document.getElementById("stock").value = medicamentos[index].stock;
        document.getElementById("fechaCaducidad").value = medicamentos[index].fechaCaducidad;
        editIndex = index;
        openForm();
    }
});
