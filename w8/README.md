

# How we handle the edit button? 

I tried to clear the input value by first grabing the form. After grabing the form I want to clear the form setting it by using empty string. This did not go well. I will review the update video for solution and reflect on the process. 

After reviewing the solution, I realized I had overlooked a crucial step: grabbing the form to clear it. I learned that to clear elements in an event listener, I need to access each input using form.elements[]. For deletion, the splice() method is used. These concepts are simple, but without thorough consideration or experience, they can be challenging to implement correctly. 