import { Main } from '../source/app.js';
describe("return time in Berlin Clock Kata", function(){
    it("return lamp all off", function(){
        let main = new Main();

        let result = main.getSimpleMinutes(0);

        expect(result).toBe('XXXX');
    })
})
