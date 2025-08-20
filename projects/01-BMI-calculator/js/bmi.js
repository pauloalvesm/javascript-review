const calculateBtn = document.getElementById("calculate");
const clearBtn = document.getElementById("clear");
const nameInput = document.getElementById("name");
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const resultDiv = document.getElementById("result");

const validateFields = () => {
    const name = nameInput.value;
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    return name !== "" && !isNaN(height) && !isNaN(weight) && height > 0 && weight > 0;
};

const calculateBMI = (weight, height) => {
    const bmi = weight / (height * height);
    return bmi.toFixed(2);
};

const classifyBMI = (bmi) => {
    if (bmi < 18.5) {
        return "abaixo do peso.";
    } else if (bmi < 25) {
        return "com peso ideal, parabéns!";
    } else if (bmi < 30) {
        return "um pouco acima do peso.";
    } else if (bmi < 35) {
        return "com obesidade grau I.";
    } else if (bmi < 40) {
        return "com obesidade grau II.";
    } else {
        return "com obesidade grau III, cuidado!";
    }
};

const displayResult = () => {
    const name = nameInput.value;
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    if (validateFields(name, height, weight)) {
        const bmi = calculateBMI(weight, height);
        const classification = classifyBMI(bmi);

        resultDiv.textContent = `${name}, seu IMC é ${bmi} e você está ${classification}`;
    } else {
        resultDiv.textContent = "Por favor, preencha todos os campos com valores válidos.";
    }
};

const clearFields = () => {
    nameInput.value = "";
    heightInput.value = "";
    weightInput.value = "";
    resultDiv.textContent = "";
    nameInput.focus();
};

calculateBtn.addEventListener("click", displayResult);
clearBtn.addEventListener("click", clearFields);