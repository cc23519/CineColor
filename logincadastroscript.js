document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;
  
    if (username === "usuario" && password === "senha") {
      showAlert("success", "Login realizado com sucesso!");
    } else {
      showAlert("error", "Usuário ou senha inválidos.");
    }
  });
  
  document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var username = document.getElementById("signup-username").value;
    var email = document.getElementById("signup-email").value;
    var password = document.getElementById("signup-password").value;

    showAlert("success", "Cadastro realizado com sucesso!");
  });
  
  function showAlert(type, message) {
    var alertElement = document.createElement("div");
    alertElement.classList.add("alert");
    alertElement.classList.add(type);
    alertElement.textContent = message;
  
    document.body.appendChild(alertElement);
  
    setTimeout(function() {
      alertElement.style.display = "none";
    }, 5000);
  }
  