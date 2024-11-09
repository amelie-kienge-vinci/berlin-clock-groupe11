export class Main{
    constructor() {       
        this.singleMinutesRow = ['X', 'X', 'X', 'X'];   
    }
 


    getSimpleMinutes(minutes) {
        
        for (let i = 0; i < minutes % 5; i++) {
            this.singleMinutesRow[i] = 'O';
          }
      
        return this.singleMinutesRow.join('');
    }


    



    
}
