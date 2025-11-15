function maskMoney(value) {
  value = value.replace(/\D/g, ""); // deixa só números

  // Se não tiver nada, retorna vazio
  if (value === "") return "";

  // Coloca centavos
  value = (parseInt(value, 10) / 100).toFixed(2);

  // Troca ponto por vírgula
  value = value.replace(".", ",");

  // Adiciona separador de milhar
  value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return value;
}

const inputValor = document.getElementById("valor");

inputValor.addEventListener("input", () => {
  inputValor.value = maskMoney(inputValor.value);
});