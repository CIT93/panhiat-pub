import { choreData, FORM} from "./global.js";
import { display, renderTbl } from "./render.js";
import { saveLS, getLS } from "./storage.js";
import { CP } from "./cp.js"
// const determineEnergyPoints = energyLevel => {
//    let energyPoints;
//     if (energyLevel === 5) {
//         energyPoints = 100;
//     } else if (energyLevel === 4) {
//         energyPoints = 75;
//     } else if (energyLevel === 3){  
//         energyPoints = 50;
//     } else if (energyLevel === 2) {
//         energyPoints = 45;
//     } else {
//         energyPoints = 25;
//     }
//     return energyPoints;

// }

// function weekend(currentDay) {
//     if(currentDay === "Saturday" || currentDay === "Sunday") {
//         return true;
//     } else {
//         return false;
//     }
// }

// function tDay(currentDay) {
//     if(currentDay === "Tuesday" || currentDay === "Thursday") {
//         return true;
//     } else {
//         return false;
//     }
// }

// function determineChores(currentDay, energyLevel) {
//     const energyPoints = determineEnergyPoints(energyLevel);
//     const isWeekend = weekend(currentDay);
//     const isTday = tDay(currentDay);
//     let chore;
//     let kidsActivities;
       
//     if (isWeekend) {
//         if (energyPoints === 100) {
//             chore = "Yard work";
//             kidsActivities = "Outdoor sport game";
//         } else if (energyPoints === 75) {
//             chore = "Garden";
//             kidsActivities = "Volunteer at local charity";
//         } else if (energyPoints === 50) {
//             chore = "Laundry";
//             kidsActivities = "Gardening with Kids";
//         } else {
//             chore = "No chores";
//             kidsActivities = "Cook breakfast together";
//         }
//     } else if ( isTday) {
//         if (energyPoints === 100) {
//             chore = "Deep clean house";
//             kidsActivities = "Attend kids sport practice";
//         } else if (energyPoints === 75) {
//             chore = "Clean rooms";
//             kidsActivities = "Assist with Homework";
//         } else if (energyPoints === 50) {
//             chore = "Laundry";
//             kidsActivities = "Watch a movie";
//         } else {
//             chore = "No chores";
//             kidsActivities = "Read a short story";
//         }
//     } else {
//         if (energyPoints === 100) {
//             chore = "Deep clean house";
//             kidsActivities = "3 kids activities";
//         } else if (energyPoints === 75) {
//             chore = "Clean rooms";
//             kidsActivities = "2 kids activities";
//         } else if (energyPoints === 50) {
//             chore = "Laundry";
//             kidsActivities = "1 kids activity";
//         } else {
//             chore = "No chores";
//             kidsActivities = "No kids activities";
//         }
//     }

//     return { chore, kidsActivities, energyPoints };
// }


function start (firstName, lastName, currentDay, energyLevel ) {
    const task = determineChores(currentDay, energyLevel)
    const engergyPoints = task.energyPoints;
    const chore = task.chore;
    const kidsActivities = task.kidsActivities;
    choreData.push({
        first: firstName, 
        last: lastName,
        day: currentDay,
        level: energyLevel,
        energy: engergyPoints, 
        chore: chore, 
        kidsActivities: kidsActivities
    });
}

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
 
FORM.firstname.addEventListener('blur', validateField);
FORM.lastname.addEventListener('blur', validateField);




FORM.addEventListener("submit", e => {
    e.preventDefault();
  
    if (FORM.firstname.value !== '' && FORM.lastname.value !== '') {
        FORM.submit.textContent = '';
        
        //start(FORM.firstname.value, FORM.lastname.value, FORM.weekDay.value, parseInt(FORM.energy.value))
        //display(choreData)
        const cpObj = new CP(FORM.firstname.value, FORM.lastname.value, FORM.weekDay.value, parseInt(FORM.energy.value))
       
        choreData.push(cpObj)
        saveLS(choreData)
        renderTbl(choreData)
        FORM.reset();
    
    } else {
        FORM.submit.textContent = "Form requires First Name and last Name"
    }
  
});

