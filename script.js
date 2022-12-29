const link = document.querySelector(".link")
const code = document.querySelector(".code")
const del = document.querySelector(".del")
// const ul=docuent.querySelector(".ul")
code.addEventListener("click", () => {
    link.style.top = `5 px`;
    link.style.right = ` 0px`;
    del.addEventListener("click", () => {
        link.remove();
    })

})
