import mongoose from "mongoose";
import bcrypt from "bcrypt"
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    phone:{
        type: Number,
        minlength: 10
    },
    bio:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

//secure password implementation

userSchema.pre('save',async function(next){
    const user = this
    console.log(`model data: ${user}`);
    if(!user.isModified("password")) {
        next()
    }

    try {
        const saltRound = parseInt(process.env.SALT);
        const hashPassword = await bcrypt.hash(user.password,saltRound);
            user.password = hashPassword;
    } catch (error) {
        next(error)
    }
})

const User = mongoose.model("User",userSchema);

export default User;