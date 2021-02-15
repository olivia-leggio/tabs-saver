document.addEventListener("click", function(e) {
    if (!e.target.classList.contains("btn")) {
      return;
    }
  
    var mode = e.target.id;
    if (mode === "save") {
        console.log("S A V I N G");
    }
    else if (mode === "restore") {
        console.log("L O A D I N G");
    }
});