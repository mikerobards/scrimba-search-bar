const searchInput = document.getElementById("searchInput")

searchInput.addEventListener("keyup", (event) => {
    let searchInput = event.target.value.toLowerCase()
    let allNamesDOMCollection = document.getElementsByClassName("name")
    for (let i = 0; i < allNamesDOMCollection.length; i++) {
        const currentName = allNamesDOMCollection[i].textContent.toLowerCase()
        currentName.includes(searchInput) ? 
            allNamesDOMCollection[i].style.display = "block" : 
            allNamesDOMCollection[i].style.display = "none"
    }
})



