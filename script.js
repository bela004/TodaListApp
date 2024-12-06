document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById("addTaskButton");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    // Função para adicionar uma nova tarefa
    function addTask() {
        if (taskInput.value.trim() === "") return;

        const li = document.createElement("li");
        li.textContent = taskInput.value;

        // Botão para marcar a tarefa como concluída
        const completeButton = document.createElement("button");
        completeButton.textContent = "Concluir";
        completeButton.classList.add("complete-btn");

        completeButton.addEventListener("click", () => {
            li.classList.toggle("completed");
        });

        // Botão para excluir a tarefa
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Excluir";
        deleteButton.classList.add("delete-btn");

        deleteButton.addEventListener("click", () => {
            taskList.removeChild(li);
        });

        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);

        taskInput.value = ""; // Limpar o campo de input
    }

    // Adicionar a tarefa ao clicar no botão
    addButton.addEventListener("click", addTask);

    // Adicionar a tarefa ao pressionar Enter
    taskInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            addTask();
        }
    });
});
