document.getElementById("create-account").addEventListener("click", function () {
    if (document.getElementById("password").value != document.getElementById("confirm-password").value) {
        document.getElementById("warning").innerText = "* passwords do not match!"
    }
})