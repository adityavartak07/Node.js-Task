import mongoose from 'mongoose';

const locationSchema = mongoose.Schema({
    cityname: String,
    amountperkm: Number,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var Location = mongoose.model('Location', locationSchema);

export default Location;