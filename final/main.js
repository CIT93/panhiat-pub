import { choreData, FORM } from "./global.js";
import { renderTbl } from "./render.js";
import { saveLS, getLS } from "./storage.js";
import { CP } from "./cp.js"

const validateField = event => {
    const field = event.target.value;
    const fieldId = event.target.id;
    const fieldError = document.getElementById(`${fieldId}Error`);

    if (!fieldError) {
        console.error(`Error element for ${fieldId} not found.`);
        return;
    }

    if (field === '') {
        fieldError.textContent = `${fieldId} is required`;
        event.target.classList.add('invalid');
    } else {
        fieldError.textContent = '';
        event.target.classList.remove('invalid');
    }
};

FORM.firstname.addEventListener('blur', validateField);
FORM.lastname.addEventListener('blur', validateField);




FORM.addEventListener("submit", e => {
    e.preventDefault();

    if (FORM.firstname.value !== '' && FORM.lastname.value !== '') {
        FORM.submit.textContent = '';
        const cpObj = new CP(
            FORM.firstname.value,
            FORM.lastname.value,
            FORM.weekDay.value,
            parseInt(FORM.energy.value)
        )
        cpObj.start()
        saveLS(choreData)
        renderTbl(choreData)
        FORM.reset();
    } else {
        FORM.submit.textContent = "Form requires First Name and last Name"
    }

});

