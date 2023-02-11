import {assert} from  'chai';
import bookerApi from '$root/page/booker.api';
import * as data from '$root/data/user.data';
import { getParams } from '$root/helper/lib.api';

describe('getdetailbook', function(){
    it('Successfull Get detail booking by id', async() => {
        const param = getParams(data.VALID_DETAIL_BOOK['id']);
        const response = await bookerApi.getDetailBook(param);

        assert.equal(response.status, 200)
    })
});