const setCPFSize = 11;

const validate = () => {
  let cpf = document.getElementById("cpf").value;
  if (validateCPF(cpf)) {
    alert("CPF Válido!");
  } else {
    alert("CPF Inválido! Confirme se tem 11 dígitos ou valor existente.");
  }
};

const validateCPF = (cpf) => {
  cpf = cpf.replace(/\D/g, "");

  if (
    !validateCPFSize(cpf) ||
    !validateEqualDigits(cpf) ||
    !validateVerificationDigits(cpf)
  ) {
    return false;
  }

  return true;
};

const validateCPFSize = (cpf) => {
  let resultCPFSize = cpf.length === setCPFSize;
  return resultCPFSize;
};

const validateEqualDigits = (cpf) => {
  let resultEqualDigits = !/^(\d)\1{10}$/.test(cpf);
  return resultEqualDigits;
};

const validateVerificationDigits = (cpf) => {
  const calculateVerificationDigit = (cpf, weight) => {
    let sum = 0;

    for (let i = 0; i < cpf.length; i++) {
      sum += parseInt(cpf.charAt(i)) * weight--;
    }

    const remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  };

  const verificationDigit1 = calculateVerificationDigit(cpf.substring(0, 9),10);
  const verificationDigit2 = calculateVerificationDigit(cpf.substring(0, 10), 11);

  return (
    parseInt(cpf.charAt(9)) === verificationDigit1 &&
    parseInt(cpf.charAt(10)) === verificationDigit2
  );
};

const clearField = () => {
  cpf.value = "";
};
