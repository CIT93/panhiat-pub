import { renderTbl } from "./render.js";
import { FORM, FNAME, LNAME, SUBMIT, WATER, BOTH} from "./global.js";
import { saveLS, cfpData } from "./storage.js";
import { FP } from "./fp.js";


const start = (firstName, lastName, houseMembers, houseSize) => {
  const houseHoldPTS = determineHouseHoldPts(houseMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push({
    firstName: firstName,
    lastName: lastName,
    houseM: houseMembers,
    houseS: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    cfpTotal: total,
  });
}

renderTbl(cfpData);

const validateField = event => {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);

  if (field === '') {
    fieldError.textContent = `${fieldId} is required`;
    event.target.classList.add('invalid');
  } else {
    fieldError.textContent = '';
    event.target.classList.remove('invalid');
  }
};

// Attach blur event listeners
FNAME.addEventListener('blur', validateField);
LNAME.addEventListener('blur', validateField);


FORM.addEventListener("submit", e => {
  e.preventDefault();

  if (FNAME.value !== '' && LNAME.value !== '') {
    SUBMIT.textContent = '';
    const fpObj = new FP(
      FNAME.value, 
      LNAME.value, 
      parseInt(e.target.housem.value), 
      e.target.houses.value,
      e.target.food.value, 
      e.target.foodSource.value,
      e.target.water.value, 
      e.target.dishwasher.checked ? parseInt(e.target.water.value)*2 : parseInt(e.target.water.value),
      e.target.dishwasher.checked,
      parseInt(e.target.purchases.value)
    );
    cfpData.push(fpObj);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
    BOTH.disabled = false;
  } else {
    SUBMIT.textContent = "Form requires first name and last name";
  }
})

WATER.addEventListener("change", e => {
  if (parseInt(WATER.value) === 0) {
    BOTH.disable = true;
  } else{
    BOTH.disable = false;
  }
})