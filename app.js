function updateDailyPlan(id, text) {
    document.getElementById(id).value = text;
}

function updateOutput() {
    const inputText = document.getElementById("inputBox").value;
    const outputBox = document.getElementById("utputBox");
    switch(inputText) {
        case "John":
            outputBox.value = "10.2.2000/Yangon/+79939731002/+95977709387/He is a programmer.";
            break;
        
        default:
            outputBox.value = "";
            break;
    }
}

module.exports = { updateDailyPlan, updateOutput };
