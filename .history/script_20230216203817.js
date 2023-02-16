document.getElementById("create-account").addEventListener("click", function () {
    if (document.getElementById("password").value != document.getElementById("confirm-password").value) {
        document.getElementById("warning").innerText = "*Passwords do not match"
    } else {
        reset();
    }
})