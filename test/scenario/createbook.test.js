import {assert} from  'chai';
import bookerApi from '$root/page/booker.api';
import * as data from '$root/data/user.data';

describe('createbook', function(){
    it('Successfull create booking', async() => {
       console.log("the data is".VALID_BOOKCREATE)
        const response = await bookerApi.createbook(data.VALID_BOOKCREATE);

        assert.equal(response.status, 200)
    });

    it('Name must be string', async() => {
       
        const response = await bookerApi.createbook(data.VALID_BOOKCREATE);

        assert.equal(response.status, 422)
    });
});