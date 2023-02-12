import {assert} from  'chai';
import bookerApi from '$root/page/booker.api';
import * as data from '$root/data/user.data';

describe('updateBook', function(){

    it('Successfull update booking data in id '+data.VALID_UPDATE.id, async() => {
        let param = data.VALID_UPDATE.id;
        const response = await bookerApi.updateBook(data.VALID_UPDATE);

        assert.equal(response.status, 200)
    });
});
