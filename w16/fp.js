class FP {
    constructor(first, last, houseMembers, houseSize, foodChoice, foodSource, water, waterPoints, both, purchases ) {
        this.first = first;
        this.last = last;
        this.houseMembers = houseMembers;
        this.houseSize = houseSize;
        this.foodChoice = foodChoice;
        this.foodSource = foodSource;
        this.water = water;
        this.waterPoints = waterPoints;
        this.both = both;
        this.purchasesPoints = purchases;
        this.calHouseHoldPoints();
        this.calHouseSizePoints();
        this.calFoodChoicePoints();
        this.calFoodSourcePoints();
        this.calTotal();
    }    
        calHouseHoldPoints() {
            if (this.houseMembers === 1) {
                this.houseHoldPoints = 14;
              } else if (this.houseMembers === 2) {
                this.houseHoldPoints = 12;
              } else if (this.houseMembers === 3) {
                this.houseHoldPoints = 10;
              } else if (this.houseMembers === 4) {
                this.houseHoldPoints = 8;
              } else if (this.houseMembers === 5) {
                this.houseHoldPoints = 6;
              } else if (this.houseMembers === 6) {
                this.houseHoldPoints = 4;
              } else if (this.houseMembers > 6) {
                this.houseHoldPoints = 2;
              }
              
        }

        calHouseSizePoints() {
            
            if (this.houseSize === "large") {
                this.houseSizePoints = 10;
            } else if (this.houseSize === "medium") {
                this.houseSizePoints  = 7;
            } else if (this.houseSize === "small") {
                this.houseSizePoints  = 4;
            } else if (this.houseSize === "apt") {
                this.houseSizePoints  = 2;
            }
          }   

        calFoodChoicePoints() {
              if (this.foodChoice === "meatDaily") {
                this.foodChoicePoints = 10;
              } else if (this.foodChoice === "meatWeekly") {
                this.foodChoicePoints = 8;
              } else if (this.foodChoice === "vegetarian") {
                this.foodChoicePoints = 4;
              } else if (this.foodChoice === "veganOrWild") {
                this.foodChoicePoints = 2;
              } else if (this.foodChoice === "prepackaged") {
                this.foodChoicePoints = 12;
              } else if (this.foodChoice === "balanced") {
                this.foodChoicePoints = 6;
              } else if (this.foodChoice === "fresh") {
                this.foodChoicePoints = 2;
              }
        }

        calFoodSourcePoints() {
          if(this.foodSource = "packed") {
              this.foodSourcePoints = 12;
          }else if (this.foodSource === "balance") {
            this.foodSourcePoints = 6;
          } else if (this.foodSource === "local") {
            this.foodSourcePoints = 2;
          }
        }


        calTotal() {
        this.total = 
        this.houseSizePoints + 
        this.houseHoldPoints + 
        this.foodChoicePoints + 
        this.foodSourcePoints + 
        this.waterPoints +
        this.purchasesPoints
        }
}

export {FP}