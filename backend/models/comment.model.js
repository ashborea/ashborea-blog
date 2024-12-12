import {Schema, mongoose} from 'mongoose';

const commentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: true
    },
    post: {
        type: Schema.Types.ObjectId, 
        ref: 'Post', 
        required: true
    },
    desc: {
        type: String,
        required: true
    },
}, {timestamps: true});