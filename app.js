const item = document.getElementById("input_bar");
const ulel = document.getElementById("to-do-box");

item.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    addTodo(this.value);
    this.value = "";
  }
});

const addTodo = (user) => {
  const newli = document.createElement("li");
  newli.innerHTML = `
    ${user}
    <i class="fa-sharp fa-regular fa-circle-xmark fa-beat" style="color: #d2323a;"></i>`;
  ulel.appendChild(newli); // changed "appendchild" to "appendChild"

  newli.addEventListener("click", function(){
    this.classList.toggle("done")
  })
  newli.querySelector("i").addEventListener("click", function()
  {
    newli.remove()
  })
};
