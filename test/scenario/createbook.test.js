import {assert} from  'chai';
import bookerApi from '$root/page/booker.api';
import * as data from '$root/data/user.data';

describe('createbook', function(){
    it('Successfull create booking', async() => {
        const response = await bookerApi.createBook(data.VALID_BOOKCREATE);

        assert.equal(response.status, 200)
    });

    it('Name must be string', async() => {
       
        let nama = data.INVALIDSTRING_BOOKCREATE.firstname;
        const response = await bookerApi.createBook(data.INVALIDSTRING_BOOKCREATE.string);

        assert.isNotString(nama, "Name must be string")

    });

    it('Integer must be number', async() => {
       
        let price = data.INVALIDNUMBER_BOOKCREATE.totalprice;
        const response = await bookerApi.createBook(data.INVALIDNUMBER_BOOKCREATE);

        assert.isNotNumber(price, "Total Price must be number")

    });

    it('Date format must be true', async() => {
       
        let date = data.INVALIDSTRING_BOOKCREATE.bookingdates;
        const response = await bookerApi.createBook(data.INVALIDDATE_BOOKCREATE);



    });

    it('Boolean must be true or false not "true" or "false" ', async() => {
       
        let deposit = data.INVALIDSTRING_BOOKCREATE.depositpaid;
        const response = await bookerApi.createBook(data.INVALIDBOOLEAN_BOOKCREATE);

        assert.isBoolean(deposit, "Deposit must be true or false")

    });
});