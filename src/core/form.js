export default class Form {
  constructor(form, controlField) {
    this.form = form;
    this.formData = null;
    this.validators = controlField;
    this.init();
  }

  init() {
    this.formData = Object.fromEntries(new FormData(this.form).entries());
    this.form.addEventListener("focusin", focusHandler.bind(this));
  }

  isValidate() {
    let isValidate = true;

    Object.keys(this.validators).forEach((control) => {
      let Valide = true;
      this.validators[control].forEach((validator) => {
        Valide = validator(this.formData[control]) && Valide;
        if (!Valide) {
          showErrorValidatio(this.form[control]);
        }
      });
      isValidate = Valide && isValidate;
    });
    return isValidate;
  }
}

function showErrorValidatio(controlError) {
  const p = document.createElement("p");
  p.innerHTML = "Введите коректное значение поля";
  p.classList.add("validation-error");
  controlError.classList.add("invalid");
  controlError.after(p);
}

function focusHandler(event) {
  if (event.target.matches(".form-control *")) {
    const nodes = this.form.querySelectorAll(".validation-error");
    if (nodes) {
      nodes.forEach((node) => node.remove());
      const elem = this.form.querySelectorAll(".invalid");
      elem.forEach((element) => element.classList.remove("invalid"));
    }
  }
}
