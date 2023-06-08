
import { loadUserData, saveUserData } from "../../scripts/user-data.js";

const saveSettingsButton = document.querySelector("#save-user");
const inputs = document.querySelectorAll("input[data-ukey]");

let userData = loadUserData() ?? {};

for (const input of inputs) {
    input.value = userData[input.dataset.ukey] ?? "";
    const ukeyInfo = document.createElement("span");
    ukeyInfo.className = "ukey-info";
    ukeyInfo.textContent = `(${input.dataset.ukey})`;
    input.after(ukeyInfo);
}

saveSettingsButton.addEventListener("click", () => {
    if (!document.forms.settings.checkValidity()) return;

    for (const input of inputs) {
        userData[input.dataset.ukey] = input.value;
    }

    saveUserData(userData);
});