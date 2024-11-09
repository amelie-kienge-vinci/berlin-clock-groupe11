import { Main } from '../source/app.js';
describe("return time in Berlin Clock Kata", function(){
    it("when minute is 0 return lamp all off", function(){
        let main = new Main();

        let result = main.getSimpleMinutes(0);

        expect(result).toBe('XXXX');
    });

    it("return first lamp on", function(){
        let main = new Main();

        let result = main.getSimpleMinutes(1);

        expect(result).toBe('OXXX');
    });

    it("return first 2 lamps on", function(){
        let main = new Main();

        let result = main.getSimpleMinutes(2);

        expect(result).toBe('OOXX');
    });

    it("return first 3 lamps on", function(){
        let main = new Main();

        let result = main.getSimpleMinutes(3);

        expect(result).toBe('OOOX');
    });

    it("return all lamps on", function(){
        let main = new Main();

        let result = main.getSimpleMinutes(4);

        expect(result).toBe('OOOO');
    });

    it("when given 5 return lamp all off", function(){
        let main = new Main();

        let result = main.getSimpleMinutes(5);

        expect(result).toBe('XXXX');
    });
    
})
