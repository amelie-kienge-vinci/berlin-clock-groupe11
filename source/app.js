export class Main{
    constructor() {       
        this.singleMinutesRow = ['X', 'X', 'X', 'X']; 
        this.fiveMinutesRow = ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'];  
    }
 


    getSimpleMinutes(minutes) {
        
        for (let i = 0; i < minutes % 5; i++) {
            this.singleMinutesRow[i] = 'O';
        };
      
        return this.singleMinutesRow.join('');
    };

    getFiveMinutes(minutes) {
        for (let i = 0; i < Math.floor(minutes / 5); i++) {
            this.fiveMinutesRow[i] = 'J';

        }   
        if(minutes<60 && minutes>=15){
            this.fiveMinutesRow[2]='R';
        } 
        return this.fiveMinutesRow.join('');
    };




    
}
