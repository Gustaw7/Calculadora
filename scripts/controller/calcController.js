class calcController {
  constructor() {
    this._displayCalcEl = document.getElementById("display");
    this._dateEl = document.getElementById("data");
    this._timeEl = document.getElementById("hora");
    this._displayCalc = "0";
    this._currentDate;
    this.initialize();
    this.initButtonsEvents();
  }

  initButtonsEvents() {
    let buttons = document.querySelectorAll("#buttons > g, #parts > g");
    buttons.forEach((btn, index) => {
      btn.addEventListener("click", (e) => {
        console.log(btn.className.baseVal.replace("btn-", ""));
      });
    });
  }

  initialize() {
    requestAnimationFrame(() => {
      this.displayDate = this.currentDate.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
      });
      this.displayTime = this.currentDate.toLocaleTimeString("pt-BR");
      this.initialize();
    });
  }

  // Retorna o valor do elemento de exibição de tempo
  get displayTime() {
    return this._timeEl.innerHTML;
  }

  // Define o valor do elemento de exibição de tempo
  set displayTime(value) {
    this._timeEl.innerHTML = value;
  }

  // Retorna o valor do elemento de exibição de data
  get displayDate() {
    return this._dateEl.innerHTML;
  }

  // Define o valor do elemento de exibição de data
  set displayDate(value) {
    this._dateEl.innerHTML = value;
  }

  // Retorna o valor do elemento de exibição da calculadora
  get displayCalc() {
    return this._displayCalc.innerHTML;
  }

  // Define o valor do elemento de exibição da calculadora
  set displayCalc(value) {
    this._displayCalc.innerHTML = value;
  }

  // Retorna a data atual
  get currentDate() {
    return new Date();
  }

  // Define a data atual
  set currentDate(value) {
    this._currentDate = value;
  }
}
