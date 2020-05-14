const foto = document.querySelectorAll(".foto");
const rood_filter = document.getElementById("rood_filter");
const rood = document.querySelectorAll(".rood");

rood_status = false;
rood_filter.onclick = function() {
    if (rood_status == false) {
        let i = 0;
        for (i; i < foto.length; i++) {
            if (foto[i].classList.contains("rood") == true) {
                foto[i].style.display = "block";
                rood_filter.style.display = "red";
            } else {
                foto[i].style.display = "none";
            }
        }
        rood_status = true;
    } else {
        let i = 0;
        for (i; i < foto.length; i++) {
            if (foto[i].classList.contains("rood") == false) {
                foto[i].style.display = "block";
            }
        }
        rood_status = false;
    }
}
