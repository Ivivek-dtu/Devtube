import mongoose,{Schema} from "mongoose";

const subscriptionSchema = new Schema ({
    subscriber: {    //jo subscribe kar rha hai
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    channel: {      // channel jisko user subscribe kar rha hai
        type: Schema.Types.ObjectId,
        ref: "User"
    }
},{timestamps: true})

export const Subscription = mongoose.model
("Subscription",subscriptionSchema)