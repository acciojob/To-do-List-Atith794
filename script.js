//your code here

let btn = document.getElementById("addTodoBtn");
let ol = document.getElementById("todoList");

function handleClick() {
	let text = document.getElementById("newTodoInput").value;
	if(text === '' || text === ""){
		return;
	}
	let li = document.createElement("li");
	li.textContent = text;
	ol.append(li);
}



