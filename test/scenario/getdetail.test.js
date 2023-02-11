import {assert} from  'chai';
import bookerApi from '$root/page/booker.api';
import * as data from '$root/data/user.data';

describe('getdetailbook', function(){
    it('Successfull Get detail booking by id', async() => {
        let param = data.VALID_DETAIL_BOOK.id;
        const response = await bookerApi.getDetailBook(param);

        assert.equal(response.status, 200)
    })

    it('Failed Get detail booking by id use string', async() => {
        let param = data.INVALID_DETAIL_IDSTRING.id;
        const response = await bookerApi.getDetailBook(param);
    
        assert.equal(response.status, 404)
    })

    it('Failed Get detail booking by id use string', async() => {
        let param = data.INVALID_DETAIL_IDBOOLEAN.id;
        const response = await bookerApi.getDetailBook(param);
    
        assert.equal(response.status, 404)
    })
});