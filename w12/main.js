const FORM = document.getElementById("form");
const OUT = document.getElementById("output");

function updateDOM(message, el) {
    const newEl = document.createElement(el);
    newEl.textContent = message;
    OUT.appendChild(newEl)
}

const startWorkOut = (exerciseType, reps, time, fn) => {
   fn(`Start ${exerciseType} exercise. The goal is ${reps} reps in ${time} seconds.`, "p")
    setTimeout(() => {
        fn(`Stop ${exerciseType}`, "h1")
    }, time * 1000)

}

FORM.addEventListener("submit", e => {
    e.preventDefault();
    const exerciseType = e.target.exercise.value;
    const reps = parseFloat(e.target.reps.value)
    const time = parseFloat(e.target.time.value);
    startWorkOut(exerciseType, reps, time, updateDOM)
})