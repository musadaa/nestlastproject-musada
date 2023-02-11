export const VALID_BOOKCREATE = {
        "firstname" : "Musada",
        "lastname" : "T",
        "totalprice" : 350000,
        "depositpaid" : true,
        "bookingdates" : {
                "checkin" : "2023-01-01",
                "checkout" : "2023-01-02"
        },
        "additionalneeds" : "Breakfast"   
};

export const INVALIDSTRING_BOOKCREATE = {
        "firstname" : true,
        "lastname" : "T",
        "totalprice" : 350000,
        "depositpaid" : true,
        "bookingdates" : {
                "checkin" : "2023-01-01",
                "checkout" : "2023-01-02"
        },
        "additionalneeds" : "Breakfast"   
};
         
export const INVALIDNUMBER_BOOKCREATE = {
        "firstname" : "Musada",
        "lastname" : "T",
        "totalprice" : "tiga puluh lima ribu",
        "depositpaid" : true,
        "bookingdates" : {
                "checkin" : "2023-01-01",
                "checkout" : "2023-01-02"
        },
        "additionalneeds" : "Breakfast"   
};
       
export const INVALIDDATE_BOOKCREATE = {
        "firstname" : "Musada",
        "lastname" : "T",
        "totalprice" : '35000',
        "depositpaid" : true,
        "bookingdates" : {
                "checkin" : "2023-13-900",
                "checkout" : "2023-01-25"
        },
        "additionalneeds" : "Breakfast"   
};

export const INVALIDBOOLEAN_BOOKCREATE = {
        "firstname" : "Musada",
        "lastname" : "T",
        "totalprice" : 35000,
        "depositpaid" : "true",
        "bookingdates" : {
                "checkin" : "2023-13-01",
                "checkout" : "2023-01-25"
        },
        "additionalneeds" : "Breakfast"   
};

export const VALID_DETAIL_BOOK = {
        
}

export default {VALID_BOOKCREATE, INVALIDSTRING_BOOKCREATE, INVALIDNUMBER_BOOKCREATE, INVALIDDATE_BOOKCREATE, INVALIDBOOLEAN_BOOKCREATE};

