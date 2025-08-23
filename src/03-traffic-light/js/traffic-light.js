const image = document.querySelector("#traffic-light");
const result = document.querySelector("div#result");

const greenLight = "../../assets/images/verde.png";
const yellowLight = "../../assets/images/amarelo.png";
const redLight = "../../assets/images/vermelho.png";

const greenColor = "#058605";
const yellowColor = "#FFC125";
const redColor = "#F60000";

const timeThreeSeconds = 3000;
const timeFiveSeconds = 5000;

function settingRedLight() {
    result.innerHTML = `<strong>PARE!</strong>`;
    result.style.color = redColor;
}

function settingYellowLight() {
    result.innerHTML = `<strong>ATENÇÃO!</strong>`;
    result.style.color = yellowColor;
}

function settingGreenLight() {
    result.innerHTML = `<strong>SIGA!</strong>`;
    result.style.color = greenColor;
}

function executingGreenLight() {
    image.src = greenLight;
    setTimeout(() => {
        executingYellowLight();
        settingYellowLight();
    }, timeFiveSeconds);
}

function executingYellowLight() {
    image.src = yellowLight;
    setTimeout(() => {
        executingRedLight();
        settingRedLight();
    }, timeThreeSeconds);
}

function executingRedLight() {
    image.src = redLight;
    settingRedLight();
    setTimeout(() => {
        executingGreenLight();
        settingGreenLight();
    }, timeFiveSeconds);
}

function turnOffTrafficLight() {
    window.location.reload();
}
