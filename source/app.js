export class Main{
    constructor() {       
        this.singleMinutesRow = ['X', 'X', 'X', 'X'];   
    }
 
    getSimpleMinutes(minutes) {
        if(minutes ===0){
            return this.singleMinutesRow.join('')
        }
        if(minutes===1){
            this.singleMinutesRow=['O','X','X','X']
        }
        if(minutes===2){
            this.singleMinutesRow=['O','O','X','X']
        }
        
        return this.singleMinutesRow.join('');
    }


    



    
}
