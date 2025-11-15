function maskPhone(value) {
  value = value.replace(/\D/g, ""); // Remove tudo que não é número
  value = value.replace(/^(\d{2})(\d)/, "($1) $2"); // Coloca DDD
  value = value.replace(/(\d{4,5})(\d{4})$/, "$1-$2"); // Hífen
  return value;
}

const inputTelefone = document.getElementById("telefone");

inputTelefone.addEventListener("input", () => {
  inputTelefone.value = maskPhone(inputTelefone.value);
});
