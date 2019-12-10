class Validator {
 
  _rules = null;
  _messages = null;
  _successHandler = null;
  _errorHandler = null;
  _errors = {};

  constructor(form) {
    this._form = form;
    this._form.addEventListener("submit", this.validate.bind(this));
  }
    get errors() {
    return this._errors;
  }
    set errors(errors) {
    this._errors = errors;
  }
    get form() {
    return this._form;
  }
    set form(form) {
    this._form = form;
  }
    get rules() {
    return this._rules;
  }
    set rules(value) {
    this._rules = value;
  }
      get messages() {
    return this._messages;
  }
    set messages(value) {
    this._messages = value;
  }
    get successHandler() {
    return this._successHandler;
  }
    set successHandler(func) {
    this._successHandler = func;
  }
    get errorHandler() {
    return this._errorHandler;
  }
    set errorHandler(func) {
    this._errorHandler = func;
  }

    init(settings) {
      rules = settings.rules;
      messages = settings.messages;
      successHandler = settings.successHandler;
      errorHandler = settings.errorHandler;
  }

      minLength(elemValue, ruleValue) {
      console.log(
      "метод minLength: ",
      "пользователь ввел: " + elemValue,
      "правило ruleValue: " + ruleValue
    );
      return elemValue.length >= ruleValue;
  }
      maxLength(elemValue, ruleValue) {
        console.log(
      "метод maxLength:",
      "пользователь ввел: " + elemValue,
      "правило ruleValue: " + ruleValue
    );
    return elemValue.length <= ruleValue;
  }
    required(elemValue) {
      console.log("метод required:", "пользователь ввел: " + elemValue);
      return elemValue.length > 0;
  }
    reg_match(elemValue, ruleValue) {
    console.log(
      "метод reg_match:",
      "пользователь ввел: " + elemValue,
      "правило ruleValue: " + ruleValue
    );
    return !ruleValue.test(elemValue);
  }
      validate(event) {
        event.preventDefault();
      let elements = form.elements;
      for (let elem of elements) {
      if (elem.dataset.validate) {
        let rulesValues = rules[elem.dataset.validate];
        this.errors[elem.dataset.validate] = [];
        for (let rule in rulesValues) {
        if (!this[rule](elem.value, rulesValues[rule])) {
          this.errors[elem.dataset.validate].push(rule);
          }
        }
      }
    }
       for (let elem of form.elements) {
        if (this.errors[elem.dataset.validate].length != 0) {
        errorHandler(form, this.errors, messages);
        return;
      } else {
        successHandler(form);
        return;
      }
    }
  }
}
  let form = document.forms.validate;
  let validator = new Validator(form);
  let rules = {
    login: {
    minLength: 4,
    maxLength: 18
  },
    password: {
    minLength: 8
  },
    name: {
    required: true
  },
    comment: {
    reg_match: /comment/
  }
};

  let messages = {
  login: {
    minLength: "Минимум 4 символа",
    maxLength: "Максимум 18 символов"
  },
  password: {
    minLength: "Минимум 8 символов"
  },
  name: {
    required: "Поле обязательно для заполнения"
  },
  comment: {
    reg_match: "Несоответсвующий формат"
  }
};

  let successHandler = form => {
  alert("Отправка заполненной формы ");
};

  let errorHandler = (form, errors, messages) => {
    let elements = form.elements;
    for (let elem of elements) {
    if (Object.keys(errors).includes(elem.dataset.validate)) {
    if (errors[elem.dataset.validate].length) {
        alert(
          "Ошибка" +
            elem.dataset.validate +
            ": " +
            messages[elem.dataset.validate][errors[elem.dataset.validate].pop()]
        );
      }
    }
  }
};

validator.init({
  rules: rules,
  messages: messages,
  successHandler: successHandler,
  errorHandler: errorHandler
});