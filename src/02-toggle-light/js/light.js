const turnOnOff = document.getElementById("toggleButton");
const light = document.getElementById("light");
const cancel = document.getElementById("cancel");

const pathToOnImage = "../../assets/images/ligada.jpg";
const pathToOffImage = "../../assets/images/desligada.jpg";
const pathToBrokenImage = "../../assets/images/quebrada.jpg";

const isLightBroken = () => {
    return light.src.indexOf("quebrada") > -1;
}

const lightOn = () => {
    if (!isLightBroken()) {
        light.src = pathToOnImage;
        turnOnOff.textContent = "Desligar";
    }
}

const lightOff = () => {
    if (!isLightBroken()) {
        light.src = pathToOffImage;
        turnOnOff.textContent = "Ligar";
    }
}

const lightBroken = () => {
    light.src = pathToBrokenImage;
    turnOnOff.disabled = true;
}

const toggleLight = () => {
    if (light.src.indexOf("desligada") > -1) {
        lightOn();
    } else {
        lightOff();
    }
}

const reloadPage = () => {
    window.location.reload();
}

turnOnOff.addEventListener("click", toggleLight);
cancel.addEventListener("click", reloadPage);
light.addEventListener("dblclick", lightBroken); 