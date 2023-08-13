document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();
  
    delete document.querySelector("form").dataset.dirty;
let hid=   document.querySelector("main")
hid.classList.add("hidden");
    document.querySelector("dialog").showModal();
  });
  
  document.querySelector("input").addEventListener("blur", () => {
    document.querySelector("form").dataset.dirty = true;
  });