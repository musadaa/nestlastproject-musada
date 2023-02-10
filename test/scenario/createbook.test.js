import {assert} from  'chai';
import bookerApi from '$root/page/booker.api';
import * as data from '$root/data/user.data';

describe('createbook', function(){
    it('Successfull create booking', async() => {
        const response = await bookerApi.createBook(data.VALID_BOOKCREATE);

        assert.equal(response.status, 200)
    });

    it('Name must be string', async() => {
       
        const response = await bookerApi.createBook(data.INVALIDSTRING_BOOKCREATE);

        assert.equal(response.status, 500)

    });

    it('Integer must be number', async() => {
       
        const response = await bookerApi.createBook(data.INVALIDNUMBER_BOOKCREATE);

        assert.equal(response.status, 500)

    });

    it('Date format must be true', async() => {
       
        const response = await bookerApi.createBook(data.INVALIDDATE_BOOKCREATE);

        assert.equal(response.status, 500)

    });

    it('Boolean must be true or false not "true" or "false" ', async() => {
       
        const response = await bookerApi.createBook(data.INVALIDBOOLEAN_BOOKCREATE);

        assert.equal(response.status, 500)

    });
});