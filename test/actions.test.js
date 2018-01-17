import expect from 'expect';

import { deleteTrade, clearDeleteNotif } from '../src/actions/deleteTradeAction';

describe('Delete Trade Action', () => {
    describe('clearDeleteNotif', () => {
        it('should return null', () => {
            expect(clearDeleteNotif().payload).toBe(null);
        });
        it('should be of type DELETE_TRADE', () => {
            expect(clearDeleteNotif().type).toBe("DELETE_TRADE");
        });
    });
    describe('deleteTrade', () => {
        it('should return a function', done => {
            expect(typeof deleteTrade({ "_id": "123123" })).toBe('function');
            done();
        });
    });
});