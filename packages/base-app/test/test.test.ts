import { createMock } from 'ts-auto-mock';

interface ISomeIn {
    str: string;
    num: number;
    nul: null;
}

describe('someTest', () => {
    it.each`
        value
        ${'q'}
        ${'q2'}
        ${'q3'}
        ${'q4'}
        ${'q5'}
        ${'q7'}
        ${'q6'}
    `('should be somenthing', ({ value }) => {
        const mock = createMock<ISomeIn>({
            str: value,
        });

        console.log(mock);
        expect(true).toBeTruthy();
    })
});
