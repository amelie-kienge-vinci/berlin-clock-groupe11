export class Main{
    constructor() {       
        this.singleMinutesRow = ['X', 'X', 'X', 'X']; 
        this.fiveMinutesRow = ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X']; 
        this.singleHoursRow=['X', 'X', 'X', 'X'];
    }
 


    getSimpleMinutes(minutes) {
        
        for (let i = 0; i < minutes % 5; i++) {
            this.singleMinutesRow[i] = 'O';
        };
      
        return this.singleMinutesRow.join('');
    };

    getFiveMinutes(minutes) {
        
        for (let i = 0; i < Math.floor(minutes / 5); i++) {
            this.turnRightColors5Minutes(i);
    
        }   
        
        return this.fiveMinutesRow.join('');
    };

    getSingleHours(hours){
        return this.singleHoursRow.join('');

    }



    

    turnRightColors5Minutes(i) {
        if ((i + 1) % 3 === 0) {
            this.fiveMinutesRow[i] = 'R';
        }
        else {
            this.fiveMinutesRow[i] = 'J';
        }
    };
}
