export class Main{
    constructor() {       
        this.singleMinutesRow = ['X', 'X', 'X', 'X'];   
    }
 
    getSimpleMinutes(minutes) {
        if(minutes ===0){
            return this.singleMinutesRow.join('')
        }
        return 0;
    }
    
}
