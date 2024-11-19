// const url = "https://jsonplaceholder.typicode.com/"

// async function getData2() {
//     const r = await fetch(url)
//     const data = await response.json()
//     console.log(data)
// }

// getData2();

// const photoOneURL = "https://jsonplaceholder.typicode.com/photos.thumbnailUrl[0]"

// async function getData() {
//     const request = await fetch(photoOneURL)
//     const data = await Response.json()
    
// }
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

// const output = document.getElementById("output")

// function renderPhotos(photos) {

//     try {

//         photos.forEach((img) => {
//             const imgElement = document.createElement("img");
//             imgElement.setAttribute("src", img.thumbnailUrl)
//             output.appendChild(imgElement)
//         })
//     } catch (error){
//         console.log(`Fetch Error`, error)
//     }
   
// }

// async function getPhotos() {
//     const photoURL = "https://jsonplaceholder.typicode.com/photos"
//     const request = await fetch(photoURL)
//     const data = await request.json()
//     renderPhotos(data.slice(0, 5));
// }

// async function start() {
//     await getPhotos()
// }

// start()

const emailUrl = "https://jsonplaceholder.typicode.com/comments"

async function renderData() {
    try {
        const request = await fetch(emailUrl)
        const data = await request.json()
        // console.log(data)
        const five = data.slice(0,5)
        five.forEach((response) => {
            const emailElement = document.createElement("p");
            emailElement.textContent = response.email;
            output.appendChild(emailElement);
        });
    
        
    }catch(error) {
        console.log(`Fetch Error`, error)
    }
    
}

renderData()