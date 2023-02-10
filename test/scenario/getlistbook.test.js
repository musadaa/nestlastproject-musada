import {assert} from  'chai';
import bookerApi from '$root/page/booker.api';

describe('getlistbook', function(){
    it('Successfull get list booking', async() => {
        const response = await bookerApi.getListBook();

        assert.equal(response.status, 200)
    });
});