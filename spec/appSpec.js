import { Main } from '../source/app.js';
describe("return time in Berlin Clock Kata", function(){
    testSingleMinutes();

    testFiveMinutes();

    testSingleHours();

    it("when hour is 0 return lamp all off", function () {
        let main = new Main();

        let result = main.getFiveHours(0);

        expect(result).toBe('XXXX');
    });
    
    
    it("when hour is 20 return lamp all on", function () {
        let main = new Main();

        let result = main.getFiveHours(20);

        expect(result).toBe('RRRR');
    });


});

function testSingleHours() {
    it("when hour is 0 return lamp all off", function () {
        let main = new Main();

        let result = main.getSingleHours(0);

        expect(result).toBe('XXXX');
    });

    it("when hour is 9 return all lamp on", function () {
        let main = new Main();

        let result = main.getSingleHours(9);

        expect(result).toBe('RRRR');
    });
}

function testFiveMinutes() {
    it("when minute is less than 5 return lamp all off", function () {
        let main = new Main();

        let result = main.getFiveMinutes(0);

        expect(result).toBe('XXXXXXXXXXX');
    });

    it("when minute is less than 10 and more than 4 return first lamp on", function () {
        let main = new Main();

        let result = main.getFiveMinutes(5);

        expect(result).toBe('JXXXXXXXXXX');
    });

    it("when minute is less than 15 and more than 9 return first 2 lamp on", function () {
        let main = new Main();

        let result = main.getFiveMinutes(10);

        expect(result).toBe('JJXXXXXXXXX');
    });

    it("when minute is less than 20and more than 14, third lamp is red", function () {
        let main = new Main();

        let result = main.getFiveMinutes(15);

        expect(result).toBe('JJRXXXXXXXX');
    });

    it("when minute is less than 25 and more than 19, 4 lamp on", function () {
        let main = new Main();

        let result = main.getFiveMinutes(20);

        expect(result).toBe('JJRJXXXXXXX');
    });

    it("when minute is less than 35 and more than 29, 6 lamp on", function () {
        let main = new Main();

        let result = main.getFiveMinutes(30);

        expect(result).toBe('JJRJJRXXXXX');
    });
}

function testSingleMinutes() {
   

    it("when minute is 0 return lamp all off", function () {
        let main = new Main();

        let result = main.getSimpleMinutes(0);

        expect(result).toBe('XXXX');
    });

    it("return first lamp on", function () {
        let main = new Main();


        let result = main.getSimpleMinutes(1);

        expect(result).toBe('OXXX');
    });

    it("return first 2 lamps on", function () {
        let main = new Main();


        let result = main.getSimpleMinutes(2);

        expect(result).toBe('OOXX');
    });

    it("return first 3 lamps on", function () {
        let main = new Main();

        let result = main.getSimpleMinutes(3);

        expect(result).toBe('OOOX');
    });

    it("return all lamps on", function () {
        let main = new Main();

        let result = main.getSimpleMinutes(4);

        expect(result).toBe('OOOO');
    });

    it("when given 5 return lamp all off", function () {
        let main = new Main();

        let result = main.getSimpleMinutes(5);

        expect(result).toBe('XXXX');
    });
    it("return first lamp on", function () {
        let main = new Main();

        let result = main.getSimpleMinutes(6);

        expect(result).toBe('OXXX');
    });
}

