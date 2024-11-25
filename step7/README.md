# Mom's Daily Task Planner
## Description of purpose
This app will help stay-at-home moms decide daily tasks based on energy level ( 1 to 5) and the day of the week( monday thru sunday).

This app will will suggest tasks based on energy level for household chore and kids activity based on input of energy level.
It will also outputthe energy score based on energy level.


# Global Variables:
string, number and boolean

* energyLevel (number) represent the energy level from 1 to 5, where 10 is well rested and fill with energy
* currentDay (string) hold days of the weekdays Monday thru Sunday
<!-- * weekend (string) hold the days of the weekend -->
* isWeekend (boolean) 
* isTday (boolean)

* chore =(string ) 
* kidsActivities (string)
* energyPoints (number) Based on the energyLevel it provide the user their energyScore or energyPoints.

<!-- * energyScore (number) calculate the energy level, task  -->

# Decision Making Process
## Write in your understanding (not in code) how your app will make your selected decision. 

>   energyLevel = [1, 2, 3, 4, 5]

>   currentDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

> isTday (true)
> isWeekend(true)


>   100 points = Full energy.
75 points = High energy, still able to complete challenging tasks.
50 points = Moderate energy, can handle routine tasks.
25 points = Low energy, only light activities should be considered.


## First logic
- if energyLevel is equal to 5 then energypoints is 100
else if energyLevel is equal to 4 then energy points is 75
else if energyLevel is equal to 3 then energy points is 50
else if energyLevel is equal to 2 then energypoints is 45
else energyLevel energypoints is 25 this is to get the energyScore


## Second Logic 
- if currentDay is Saturday or Sunday then isWeekend result in boolean

## Third Logic
- if currentDay is Tuesday or Thursday then isTday result in boolean

## Fourth Logic
- if energyPoints is 100 and isweekend 
do chore.
do kid's activities

- if energyPoints is 75 and isweekend 
do chore.
do kid's activities 

- if energyPoints is 50 and isweekend 
do chore.
do kid's activities

- if energyPoints is 45 and isweekend 
do chore.
do kid's activities

- if energyPoints is 25 and isweekend 
do no chore.
do no kid's activities

- if energyPoints is 100 and no isweekend no istday
do chore.
do kid's activities

- if energyPoints is 75 and no isweekend no istday
do chore.
do kid's activities

- if energyPoints is 50 and no isweekend no istday
do chore.
do kid's activities

- if energyPoints is 45 and no isweekend no istday
do chore.
do kid's activities

- if energyPoints is 25 and no isweekend no istday
no  chore.
no kid's activities

### Hardcode tabular data

I want to output the data heading to have user first name, last name, the current day, energy score, chore, kids activity with an action for del and edit. 

first, last, day, energy score, chore, kids activity, action.





# Instruction

## Make sure you have at least 1 type of calculation.
Based on the energy level and task it will output energy score for the day

# Output
Based on the energy level and weekday it will output five categories such Weekday, energy score, chore, self-care, kids activities in the UI. 

Now write conditionLinks to an external site. and comparsion operatorsLinks to an external site. that will reflect the result of your decision making process based on the inputs (variables provided).
You need to implement at least 2 condition blocks and use  && or || or both in your code.
You need to use if  and if else or you can also use the switch statement. 
Make sure you document your code using comments.
Don't write functions (yet) show your decision output on the page or use console.log. 
Use template strings for your output

# MAKE SURE YOU FIX any issues you had for Step 1!  Please reach out if you need help! 


Using const to declare the functions
You can either write traditional functions or arrow functions
The global variables you created in step1 will become arguments passed into the functions as parameters.
Eliminate global variables. If you are unable to do so explain (with code comments) why you were unable eliminate global variables.  
The functions need to work together, what this mean is that your function needs to have return values that you will use in another function:
Create a data structure with both input and decision values. 
You can select which data structure you want to use this week. For example you can use a string, array, object or an array of objects.
Next week we will update to use and array of objects, but here you can choose.  
COMMIT MESSAGE - "functions"
Make sure you call your function(s) several times with different inputs and display the decision on the page (index.html).
Make sure your code works and meets the requirements above. 
COMMIT MESSAGE - "finished"
This code may also be covered in the code review. 
Submit your commit history for the step2 folder. 


# Review 

Here is my feedback on this code. 

For this work you needed to have your functions working together. Here you function:

determineEnergyScore

Does return a value:

 return energyPoints

But you are not using or declaring that value in your code.  (-15)

Interesting on your function call:

determineChores(6, "Monday")

You are hardcoding the energyPoints?

In the determineChores you are also returning something that is not declared. Also you have array declared  and assigning a value to it, which is a start, but updating an array with multiple values is what you need to do here. (-20)

So...I hope you come talk with me, this work is a bit late (-10).

Rio :

Rio Wal

### Step 4: 

You are pushing the objects into the array and that is good, you are making decision and that is good.  You are using arrays for the different activities but I don't see more than 1 item in the array...so my question would be...why use it.  Maybe I missed something here. 

You are using a form and that is good!

This is late, but I will not take off point for the questions I have above, but make sure your code is taking this feedback into account on the next version.

Update your code include the function calls inside the eventlisteners for the form
Output the decision and some or all the input data, however you want.  
Write some custom validation for at least 1 of your inputs.
Hardcode what your plan on doing for tabular data, which we will do next week.

## step 4
For this week you did not need to code the table and i see you did! Now if it worked that would have been fine, but your render table code does not work here.

Also you need to update this to only use the FORM or tell me why it is needed, I covered this in week 13 attnendance:

const firstNameInput= document.getElementById('firstName');
const lastNameInput= document.getElementById('lastName');
const submitEL= document.getElementById('submitError');

Late (-25) table code not working (-5) and refactor references (-5)

Rio :]

Rio Waller, Nov 4 at 2:16pm
Oh...I see that the table does work...next week you will need it in a module.

Fix any issues from step 4
Create a new folder for step5 and copy ending code from step4.
Implement a module for rendering
the user input and decision to a table, or a table like structure.  
Make sure all functions are concise and generally only do 1 or 2 thing at the most. 
Your output needs include edit and delete buttons, that you will code next week.  (It fine to do them this week if you want)
Make sure you test your functions before submitting and fix any error you might have in your code. 
Remove any commented code. 
Make sure you have eliminated most of your global variables, and for form reference implement a global.js module. 
Reach out for help if needed.  
COMMIT MESSAGE - "my app step 5"