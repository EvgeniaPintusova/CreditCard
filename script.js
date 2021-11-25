function FormAction() {
  //dom-elements of form (getting by id)
  const buttonSave = document.getElementById("buttonSave");
  const creditCardForm = document.getElementById("creditCardForm");
  const creditCardView = document.getElementById("creditCardView");
  const errorContainer = document.getElementById("errorContainer");
  //dom-inputs of form (getting by form selectors)
  const inputType = creditCardForm.card_type;
  const inputNumber1 = creditCardForm.card_number_1;
  const inputNumber2 = creditCardForm.card_number_2;
  const inputNumber3 = creditCardForm.card_number_3;
  const inputNumber4 = creditCardForm.card_number_4;
  const inputUserName = creditCardForm.card_username;
  const inputDateMonth = creditCardForm.card_date_month;
  const inputDateYear = creditCardForm.card_date_year;
  //object for saving inputs info
  let creditCardData = {};
  let validation = true;
  //dom-elements for cardView
  let imgCardType = creditCardView.getElementsByClassName("card_system")[0];
  let valueCardType = creditCardView.getElementsByClassName("card_type")[0];
  let valueCardNumber = creditCardView.getElementsByClassName("card_number")[0];
  let valueCardMonth = document.getElementById("monthValue");
  let valueCardYear = document.getElementById("yearValue");
  let valueCardUserName =
    creditCardView.getElementsByClassName("card_username")[0];

  //functions
  buttonSave.addEventListener("click", (e) => {
    e.preventDefault();
    setCardData();
    for (const prop in creditCardData) {
      if (!creditCardData[prop]) {
        validation = false;
        document.getElementById(prop).classList.add("error_input");
        errorContainer.style.opacity = "1";
      }
    }
    if (validation) {
      this.setCardView();
      creditCardForm.classList.add("hide");
      creditCardView.classList.add("active");
    }
  });

  this.setCardData = () => {
    creditCardData.cardType = inputType.value;
    creditCardData.number1 = inputNumber1.value;
    creditCardData.number2 = inputNumber2.value;
    creditCardData.number3 = inputNumber3.value;
    creditCardData.number4 = inputNumber4.value;
    creditCardData.userName = inputUserName.value;
    creditCardData.dateMonth = inputDateMonth.value;
    creditCardData.dateYear = inputDateYear.value;
  };

  this.setCardView = () => {
    imgCardType.src = `img/${creditCardData.cardType}.png`;
    valueCardType.textContent = creditCardData.cardType;
    let number =
      creditCardData.number1 +
      " " +
      creditCardData.number2 +
      " " +
      creditCardData.number3 +
      " " +
      creditCardData.number4;
    valueCardNumber.textContent = number;
    valueCardMonth.textContent = creditCardData.dateMonth;
    valueCardYear.textContent = creditCardData.dateYear;
    valueCardUserName.textContent = creditCardData.userName.toLowerCase();
    console.log(creditCardData);
  };

  this.removeError = (element) => {
    validation = true;
    if (element.classList.entries("error_input")) {
      element.classList.remove("error_input");
    }
    errorContainer.style.opacity = "0";
    errorContainer.innerHTML = "Please, check the data...";
  };

  this.addError = (element, error) => {
    validation = false;
    element.classList.add("error_input");
    if (!errorContainer.textContent.includes(error)) {
      errorContainer.innerHTML += "<br/>" + error;
    }
    errorContainer.style.opacity = "1";
  };

  inputType.addEventListener("blur", function () {
    if (!this.value) {
      addError(this, "Choose the type of payment");
    } else {
      removeError(this);
    }
  });

  inputNumber1.addEventListener("blur", function () {
    if (this.value.length !== 4) {
      addError(this, "Write 4 number");
    } else {
      removeError(this);
    }
  });

  inputNumber2.addEventListener("blur", function () {
    if (this.value.length !== 4) {
      addError(this, "Write 4 number");
    } else {
      removeError(this);
    }
  });

  inputNumber3.addEventListener("blur", function () {
    if (this.value.length !== 4) {
      addError(this, "Write 4 number");
    } else {
      removeError(this);
    }
  });

  inputNumber4.addEventListener("blur", function () {
    if (this.value.length !== 4) {
      addError(this, "Write 4 number");
    } else {
      removeError(this);
    }
  });

  inputUserName.addEventListener("blur", function () {
    const nameValid = /(^[a-zA-Z]*)[,|\s]([a-zA-Z]+$)/;
    if (!nameValid.test(this.value)) {
      addError(this, "Write the name and surname");
    } else {
      removeError(this);
    }
  });

  inputNumber1.onkeyup = function () {
    if (this.value.length == 4) {
      inputNumber2.focus();
    }
  };
  inputNumber2.onkeyup = function () {
    if (this.value.length == 4) {
      inputNumber3.focus();
    }
  };
  inputNumber3.onkeyup = function () {
    if (this.value.length == 4) {
      inputNumber4.focus();
    }
  };
  inputNumber4.onkeyup = function () {
    if (this.value.length == 4) {
      userName.focus();
    }
  };
  inputDateMonth.onkeyup = function () {
    if (this.value.length == 2 && this.value >= 1 && this.value <= 12) {
      inputDateYear.focus();
      removeError(this);
    } else {
      addError(this, "Month can be from 01 to 12");
    }
  };
  inputDateYear.onkeyup = function () {
    const date = new Date().getFullYear() - 2000;
    if (
      this.value.length == 2 &&
      this.value >= date &&
      this.value <= date + 2
    ) {
      buttonSave.focus();
      removeError(this);
    } else {
      addError(this, `Year should be from ${date} to ${date + 2}`);
    }
  };
}
FormAction();
