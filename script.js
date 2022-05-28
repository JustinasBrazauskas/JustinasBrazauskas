Let element_textarea = document.getElementById("textarea");
element_textarea.innerText = "Enter your comment!";

document.getElementById("button").addEventListener("click", (event) => {
  event.target.innerText = "Submit";
});
