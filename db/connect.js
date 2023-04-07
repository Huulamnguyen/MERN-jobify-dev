import mongoose from 'mongoose';

const connectDB = (url, options) => {
    return mongoose.connect(url)
}

export default connectDB;