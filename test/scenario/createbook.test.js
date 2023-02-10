import {assert} from  'chai';
import bookerApi from '$root/page/booker.api';
import * as data from '$root/data/user.data';

describe('createbook', function(){
    it('Successfull create booking', async() => {
        const response = await bookerApi.createBook(data.VALID_BOOKCREATE);

        assert.equal(response.status, 200)
    });

    it('Name must be string', async() => {
       
        const response = await bookerApi.createBook(data.INVALID_BOOKCREATE);

        assert.equal(response.status, 500)

    });
});