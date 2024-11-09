export class Main{
    constructor() {       
        this.singleMinutesRow = ['X', 'X', 'X', 'X'];   
    }
 
    getSimpleMinutes(minutes) {
        if(minutes ===0 || minutes===5){
            return this.singleMinutesRow.join('')
        }
        if(minutes===1){
            this.singleMinutesRow=['O','X','X','X']
        }
        if(minutes===2){
            this.singleMinutesRow=['O','O','X','X']
        }
        if(minutes===3){
            this.singleMinutesRow=['O','O','O','X']
        }
        if(minutes===4){
            this.singleMinutesRow=['O','O','O','O']
        }
        
        return this.singleMinutesRow.join('');
    }


    



    
}
