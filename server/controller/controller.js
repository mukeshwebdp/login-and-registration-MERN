import User from "../model/userModel.js";
import bcrypt from "bcrypt";
export const create = async (req, res) => {
    try {
        const {name, email, phone, bio, password} = req.body;
        // const saltRound = parseInt(process.env.saltRound);

        // const hash_password = await bcrypt.hash(password,saltRound)

        const userInfo = new User({name, email, phone, bio, password});
        await userInfo.save();
        userInfo.password = null;
        res.status(200).json(`Dear ${userInfo.name} you are successfully registred`);
    } catch (error) {
        console.error(`Data not saved error: ${error}`);
        res.status(500).json({ error: 'Failed to save user data' });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userInfo = await User.findOne({ email });

        if (!userInfo) {
            return res.status(404).json({ error: 'email and password not found' });
        }
        const matchPassword = await bcrypt.compare(password, userInfo.password);
        if(!matchPassword){
            return res.status(401).json({ error: 'Invalid password' });
        }
        userInfo.password = null;
        res.status(200).json(userInfo)
    } catch (error) {
        console.error(`Data not found: ${error}`);
        res.status(500).json({ error: 'Failed to fetch user data' });
    }
};

export const profile = async(req,res)=>{
    try {
        const id= req.params.id;
        const userExist = await User.findById(id).select('-password');
        if(!userExist){
            return res.status(404).json({message: 'user data not found.'})
        }
        // userExist.password =null
        res.status(200).json(userExist)
    } catch (error) {
        res.status(500).json({
            message: 'data error',
            error: error
        })
    }
}