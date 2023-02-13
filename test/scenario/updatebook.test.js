import {assert} from  'chai';
import bookerApi from '$root/page/booker.api';
import * as data from '$root/data/user.data';

describe('updateBook', function(){

    it('Successfull update booking data in id '+data.VALID_UPDATE.id, async() => {
        let param = data.VALID_UPDATE.id;
        const response = await bookerApi.updateBook(param, data.VALID_UPDATE);

        assert.equal(response.status, 200)
    }),

    it('Failed update booking data input firstname '+data.INVALID_UPDATE_NOSTRING.id, async() => {
        let param = data.INVALID_UPDATE_NOSTRING.id;
        const response = await bookerApi.updateBook(param, data.INVALID_UPDATE_NOSTRING);

        assert.equal(response.status, 400)
    }),

    it('Failed update booking data input firstname '+data.INVALID_UPDATE_NONUMBER.id, async() => {
        let param = data.INVALID_UPDATE_NONUMBER.id;
        const response = await bookerApi.updateBook(param, data.INVALID_UPDATE_NONUMBER);

        assert.equal(response.status, 400)
    })
});
