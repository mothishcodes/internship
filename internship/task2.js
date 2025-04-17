// JavaScript Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
  
    if (!name || !email) {
      alert("Please fill out all required fields.");
      e.preventDefault();
      return;
    }
  
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      e.preventDefault();
    }
  });
  
  // Dynamic To-Do List
  function addTask() {
    const taskInput = document.getElementById("taskInput");
    const task = taskInput.value.trim();
    if (task === "") return;
  
    const li = document.createElement("li");
    li.textContent = task;
    li.addEventListener("click", () => li.remove()); // Remove on click
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
  }
  