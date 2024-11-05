const FORM = document.getElementById("form");
const OUT = document.getElementById("output");

function updateDOM(message, el) {
    const newEl = document.createElement(el);
    newEl.textContent = message;
    OUT.appendChild(newEl)
}

const startWorkOut = (exerciseType, reps, time, fn) => {
  
    fn(`Start ${exerciseType} exercise. The goal is ${reps} reps in ${time} seconds.`, "p")

    // this is a promise
    return new Promise((resolve, reject) => {

   // this was the async  
        if (time === 0){
            reject(`Error on time selection`)
        } else {
            setTimeout(() => {
                resolve(`Stop ${exerciseType}`, "h1")
            }, time * 1000)
        }
   })
}

function onSuccess(data) {
    console.log(`Success: data`)
}

function onError(error) {
    updateDOM(`ERROR: ${error}`, "h2")
}

function onFinally() {
    console.log('Finally we are done')
}

FORM.addEventListener("submit", e => {
    e.preventDefault();
    const exerciseType = e.target.exercise.value;
    const reps = parseFloat(e.target.reps.value)
    const time = parseFloat(e.target.time.value);
    startWorkOut(exerciseType, reps, time, updateDOM)
        .then(updateDOM, onError)
        .then(onSuccess)
        .catch(onError)
        .finally(onFinally)
})