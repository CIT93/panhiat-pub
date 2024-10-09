# localStorage


[local storage property](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
 
 Local storage is keeping data or information in the browser so the user see it later
 
 if you use local host it has local storage

 store in live server in the local storage

 first use the syntax 
 <input>
 <h2></h2>
 localStorage.setItem("keyName", input.value );
 h2.innerHTML = localStorage.getItem("value")
 
LocalStorage 

- Easy to us
- synchronous API
- Sotres data without expiration time
- up to 5 to 10 mb depending on the broswer

Con 
- blocking synchronous calls could affect UI thread
- limited to string based key/value pairs
- No data encryption, insured
- shared across all tabs and windowns from the same origin. 


# sessionStorage 

Pros: 
- similar to localstorage but limited to a session
- data is only accessible during the lifetim eof the page session

cons: 
- same as local storage except for persistence

## Json

- Json is a way we exchange data easy for human to read and machine 

method in json called stringify 

Json compute objects where we have to stringify objects and transforms it into a json string and so we can store it in the local storage. 


If we want to bring data back into code we need to use the parse() method in js. 
 

## When to use json method stringify? 

- User ente
# when do we want to parse data? 

- user delete data or load the page

localStorage.setItem("demo", {name: "rio"})

localStorage
> const newObj = {name="rio"}

const serialLizedObj = JSON.stringify(newObj)

localStorage.setItem("demo", serializedObj)

## get the item back 

Const newObjSerialized = localStorage.getItem(demo) 

const newObj = JSON.parse(newObjSerialized)

newobj
# Summary 
Json to conver object literal and serialized to storage in the local storage and parse to bring back to js

# Understanding
why are we using it?
We are using local storage because we want the broswer to remember the data in the UI or the user broswer history. 
what are the methods?
There are two main method such as parse() and stringify()
Why do we need it? 
We use Json to send data to local host or server, these two method makes it easier to read for coder and machine. 

## Challenge

Where can we remove the render table and hit edit and delete in the render the local storage and submit it render all the info