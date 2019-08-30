import {
    productPage
} from './product';
// jest.autoMockOff();
test('first jest test', () => {
    expect(productPage.testEg(2, 3)).toBe(5)
});