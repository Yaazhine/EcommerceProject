const link = document.querySelector(".link")
const code = document.querySelector(".code")
const del = document.querySelector(".del")
// const ul=docuent.querySelector(".ul")
code.addEventListener("click", () => {
    // link.style.top = `5 px`;
    // link.style.right = ` 0px`;
    link.style.visibility = "visible";
    del.addEventListener("click", () => {
        link.remove();
    })

})
