class CP {

    constructor(firstName, lastName, currentDay, energyLevel ) {
        this.firstName = firstName
        this.lastName = lastName
        this.currentDay = currentDay
        this.energyLevel = energyLevel
        this.determineEnergyPoints()
        this.determineChores();
        this.chore = chore;
        this.kidsActivities = kidsActivities;
        
    
    }
    determineEnergyPoints(energyLevel) {
        let energyPoints;
         if (energyLevel === 5) {
             energyPoints = 100;
         } else if (energyLevel === 4) {
             energyPoints = 75;
         } else if (energyLevel === 3){  
             energyPoints = 50;
         } else if (energyLevel === 2) {
             energyPoints = 45;
         } else {
             energyPoints = 25;
         }
         return energyPoints;
     
     }

    weekend(currentDay) {
        if(currentDay === "Saturday" || currentDay === "Sunday") {
            return true;
        } else {
            return false;
        }
    }
    
    tDay(currentDay) {
        if(currentDay === "Tuesday" || currentDay === "Thursday") {
            return true;
        } else {
            return false;
        }
    }

    determineChores() {
        this.energyPoints = this.determineEnergyPoints();
        const isWeekend = this.weekend();
        const isTday = this.tDay();
        let chore;
        let kidsActivities;
           
        if (isWeekend) {
            if (energyPoints === 100) {
                chore = "Yard work";
                kidsActivities = "Outdoor sport game";
            } else if (energyPoints === 75) {
                chore = "Garden";
                kidsActivities = "Volunteer at local charity";
            } else if (energyPoints === 50) {
                chore = "Laundry";
                kidsActivities = "Gardening with Kids";
            } else {
                chore = "No chores";
                kidsActivities = "Cook breakfast together";
            }
        } else if ( isTday) {
            if (energyPoints === 100) {
                chore = "Deep clean house";
                kidsActivities = "Attend kids sport practice";
            } else if (energyPoints === 75) {
                chore = "Clean rooms";
                kidsActivities = "Assist with Homework";
            } else if (energyPoints === 50) {
                chore = "Laundry";
                kidsActivities = "Watch a movie";
            } else {
                chore = "No chores";
                kidsActivities = "Read a short story";
            }
        } else {
            if (energyPoints === 100) {
                chore = "Deep clean house";
                kidsActivities = "3 kids activities";
            } else if (energyPoints === 75) {
                chore = "Clean rooms";
                kidsActivities = "2 kids activities";
            } else if (energyPoints === 50) {
                chore = "Laundry";
                kidsActivities = "1 kids activity";
            } else {
                chore = "No chores";
                kidsActivities = "No kids activities";
            }
        }
    
        return { chore, kidsActivities, energyPoints };
    }
    

}

export { CP }