(function() {
    const pictures = [
        "1",
        "2",
        "3",
        "4",
        "5",

    ];

    const buttons = document.querySelectorAll(".btn")
    const imgDiv = document.querySelector(".img-container")

    let counter = 0
    buttons.forEach(function (button) {
        button.addEventListener("click", function (e) {
            if (button.classList.contains('btn-left')) {
                counter--
                if(counter < 0) {
                    counter = pictures.length -1
                }
                imgDiv.style.background = `url('./img/${pictures[counter]}.jpg')`
            }
            if (button.classList.contains('btn-right')) {
                counter++
                if(counter > pictures.length - 1) {
                    counter = 0
                }
                imgDiv.style.background = `url('img/${pictures[counter]}.jpg')`
            }
        })
    })
})();