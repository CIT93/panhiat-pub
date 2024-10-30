const FORM = document.getElementById("form");
const WORKOUT = document.getElementById("exercise");
const REPS = document.getElementById("reps");
const SECONDS = document.getElementById("seconds");

function display(exerciseType, reps, time) {
   
    const newP = document.createElement("p");
    newP.textContent = `Start ${exerciseType} exercise. The goal is ${reps} reps in ${time} seconds.`
    

    const newH3 = document.createElement("h3");
    newH3.textContent = `End ${exerciseType} exercise`;
    const output = document.getElementById("output");
    output.appendChild(newP)
    output.appendChild(newH3)
    
}

FORM.addEventListener("submit", e => {
    e.preventDefault();
    // const workOut = WORKOUT.value;
    // const repTime = parseInt(REP.value);
    // const time = parseInt(SECONDS.value); 

    const exerciseType = WORKOUT.value;
    const reps = parseInt(REPS.value);
    const time = parseInt(SECONDS.value);

    display(exerciseType, reps, time);
    setTimeout(function(){
        display(exerciseType, reps, time), 2000
    })

    FORM.reset();
})