# Mommy's Decision App

## Description of purpose

This app helps stay-at-home moms decide their daily tasks based based on their energy level ( 1 to 5) and the day of the week( Monday thru Sunday). It suggests suitable household chores and kids' activities based on the energy level provided.

# Global Variables:

energyLevel *(number):*
Represents the user's energy level on a scale from 1 to 5.

> Example: 1 means very low energy, while 5 means full energy.

currentDay *(string):*
Holds the current day of the week (e.g., "Monday", "Tuesday", etc.).

isWeekend *(boolean):*
A true/false value determined by whether the day is "Saturday" or "Sunday".
>   Example: true if it's Saturday or Sunday, otherwise false.


isTday *(boolean):*
A true/false value based on whether the day is "Tuesday" or "Thursday".

>   Example: true for Tuesday or Thursday, otherwise false.

chore *(string):*
Represents the household task to be performed based on the energy level.

kidsActivities *(string):*
Represents the kids' activity suggestion based on the energy level.

energyPoints *(number):*
This score is calculated from the energyLevel to determine the user’s capacity for completing tasks.

# Decision Making Process
 Write in your understanding (not in code) how your app will make your selected decision.

Energy level scale:

100 points = Full energy.
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

## Fourth logic

- based on current day and energy score this is the task and kid's activities.

#### For Weekends (isWeekend = true):

Energy Points = 100: Do major chores (e.g., "Yard work") and outdoor activities (e.g., "Outdoor sports game").
Energy Points = 75: Do medium chores (e.g., "Garden") and volunteer activities (e.g., "Volunteer at local charity").
Energy Points = 50: Do light chores (e.g., "Laundry") and simple kids' activities (e.g., "Gardening with kids").
Energy Points = 45: No chores, but light activity (e.g., "Cook breakfast together").
Energy Points = 25: No chores, no kids' activities.

#### For Tuesday or Thursday (isTday = true):

Energy Points = 100: Do deep cleaning (e.g., "Deep clean house") and attend kids' sports (e.g., "Attend kids' sports practice").
Energy Points = 75: Do light cleaning (e.g., "Clean rooms") and help with homework (e.g., "Assist with homework").
Energy Points = 50: Do minimal chores (e.g., "Laundry") and indoor activities (e.g., "Watch a movie").
Energy Points = 45: No chores, just read or relax with kids (e.g., "Read a short story").

#### For Other Weekdays (isWeekend = false and isTday = false):

Energy Points = 100: Deep clean house, do multiple kids' activities (e.g., "3 kids' activities").
Energy Points = 75: Clean rooms, do moderate kids' activities (e.g., "2 kids' activities").
Energy Points = 50: Do laundry, engage in one kids' activity (e.g., "1 kids' activity").
Energy Points = 45: Light chores or no chores, simple kids' activity.
Energy Points = 25: No chores and no kids' activities.

# Hardcode tabular data

The Hardcode tabular data the following;

| First Name | Energy Score | Chore     | Kids Activity  | Action      |
| ---------- | ------------ | --------- | -------------- | ----------- |
| Jane       | 100          | Yard work | Outdoor sports | Edit/Delete |