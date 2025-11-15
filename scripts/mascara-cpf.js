function maskCPF(value) {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{2})$/, "$1-$2");
}

const inputCPF = document.getElementById("cpf");

inputCPF.addEventListener("input", () => {
  inputCPF.value = maskCPF(inputCPF.value);
});
