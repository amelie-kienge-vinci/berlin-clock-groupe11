export class Main{
    constructor() {       
        this.singleMinutesRow = ['X', 'X', 'X', 'X']; 
        this.fiveMinutesRow = ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X']; 
        this.singleHoursRow=['X', 'X', 'X', 'X'];
        this.fiveHoursRow=['X', 'X', 'X', 'X'];
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
        for (let i = 0; i < hours % 5; i++) {
            this.singleHoursRow[i] = 'R';
        };

        return this.singleHoursRow.join('');

    };

    getFiveHours(hours){
        for (let i = 0; i < Math.floor(hours / 5); i++) {
           this.fiveHoursRow[i]='R'
        }   
        
        return this.fiveHoursRow.join('');
    };

    getSeconds(seconds){
        if (seconds %2  === 0){
            return 'R';
        }
        return 'X';
    };

    getBerlinClock(hours, minutes, seconds) {
        const secondsLamp = this.getSeconds(seconds);
        const fiveHoursRow = this.getFiveHours(hours);
        const singleHoursRow = this.getSingleHours(hours);
        const fiveMinutesRow = this.getFiveMinutes(minutes);
        const singleMinutesRow = this.getSimpleMinutes(minutes);
 
        return [
            secondsLamp,
            fiveHoursRow,
            singleHoursRow,
            fiveMinutesRow,
            singleMinutesRow
        ].join('\n');
    };
    

    turnRightColors5Minutes(i) {
        if ((i + 1) % 3 === 0) {
            this.fiveMinutesRow[i] = 'R';
        }
        else {
            this.fiveMinutesRow[i] = 'J';
        }
    };
}
