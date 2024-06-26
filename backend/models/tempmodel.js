const mongoose = require("mongoose")

const tempmodel =mongoose.Schema({

    name : {
        type : String,
        required:[true , "Enter name correctly" ]
    },
    
    m_id : {
        type:String,
        required:[true , "enter M_ID"]
    },
    contact : {
        type : String,
        required : false
    }
    

}
,
{
    timestamps:true
}


)


module.exports = mongoose.model("tempModal" , tempmodel)