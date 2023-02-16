const pw = document.getElementById("password")
const pwC = document.getElementById("confirm-password")

pwC.addEventListener("input", function () {
    if (pw.value != pwC.value) {
        document.getElementById("warning").innerText = "* Passwords do not match."
    }
})