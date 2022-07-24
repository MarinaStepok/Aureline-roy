const form = document.querySelector("form"),
    statusTxt = form.querySelector(".btn");

form.onsubmit = (e) => {
    e.preventDefault();
    statusTxt.style.color = "#ffffff";
    statusTxt.style.display = "block";
    statusTxt.innerText = "Envoi de votre message...";
    form.classList.add("disabled");

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "php/message.php", true);
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let response = xhr.response;
            if (response.indexOf("Le champ e-mail et message est obligatoire!") != -1 
            || response.indexOf("Entrez une adresse e-mail valide!") != -1 
            || response.indexOf("Désolé, impossible d'envoyer votre message!") != -1) {
                statusTxt.style.color = "red";
            } else {
                form.reset();
                setTimeout(() => {
                    statusTxt.style.display = "none";
                }, 3000);
            }
            statusTxt.innerText = response;
            form.classList.remove("disabled");
        }
    }
    let formData = new FormData(form);
    xhr.send(formData);
}
