export default class Modal {
  constructor(abrir, fechar, modal) {
    this.botaoAbrir = document.querySelector(abrir);
    this.botaoFechar = document.querySelector(fechar);
    this.containerModal = document.querySelector(modal);

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickForamodal = this.clickForamodal.bind(this);
  }

  ToggleModal() {
    this.containerModal.classList.toggle("ativo");
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.ToggleModal();
  }

  clickForamodal(event) {
    if (event.target === this.containerModal) {
      this.ToggleModal();
    }
  }

  addModalEvents() {
    this.botaoAbrir.addEventListener("click", this.eventToggleModal);
    this.botaoFechar.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.clickForamodal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvents();
    }
    return this;
  }
}
