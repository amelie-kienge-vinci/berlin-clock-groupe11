export class Main{
    constructor() {       
        this.singleMinutesRow = ['X', 'X', 'X', 'X'];   
    }
 
    getSimpleMinutes(minutes) {
        if(minutes ===0){
            return this.singleMinutesRow.join('')
        }
        this.singleMinutesRow=['O','X','X','X']
        return this.singleMinutesRow.join('');
    }


    



    
}
