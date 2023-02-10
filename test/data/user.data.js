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

export const INVALID_BOOKCREATE = {
        "firstname" : true,
        "lastname" : "T",
        "totalprice" : 350000,
        "depositpaid" : true,
        "bookingdates" : {
                "checkin" : "2023-01-01",
                "checkout" : "2023-01-02"
        },
        "additionalneeds" : "Breakfast"   
}
         
        
export default {VALID_BOOKCREATE, INVALID_BOOKCREATE};

