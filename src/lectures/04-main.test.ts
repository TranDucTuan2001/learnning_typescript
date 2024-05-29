import { isPossitive } from "./04-main";
describe('Name of the group', () => {
    it('should return true when n>0 ', () => {
        expect(isPossitive(5)).toBe(true);
        expect(isPossitive(1)).toBe(true);
        expect(isPossitive(3)).toBe(true);
    });
    it('should return false when n=0 ', () => {
        expect(isPossitive(0)).toBe(false);
       
    });
    it('should return true when n<0 ', () => {
        expect(isPossitive(-5)).toBe(false);
        expect(isPossitive(-1)).toBe(false);
        expect(isPossitive(-3)).toBe(false);
    });
});