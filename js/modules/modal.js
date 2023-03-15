export default function initModal() {}

const botaoAbrir = document.querySelector("[data-modal='abrir'");
const botaoFechar = document.querySelector("[data-modal='fechar'");
const containerModal = document.querySelector("[data-modal='container'");

if (botaoAbrir && botaoFechar && containerModal) {
  function ToggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle("ativo");
  }
  function clickForamodal(event) {
    if (event.target === this) {
      ToggleModal(event);
    }
  }
  botaoAbrir.addEventListener("click", ToggleModal);
  botaoFechar.addEventListener("click", ToggleModal);
  containerModal.addEventListener("click", clickForamodal);
}
