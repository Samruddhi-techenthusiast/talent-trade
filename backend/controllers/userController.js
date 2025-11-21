const User = require("../models/User");


exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user).select("-password"); // exclude password
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ user });
  } catch (err) {
    res.status(500).json({ message: "Server Error", err });
  }
};
exports.updateProfile=async(req,res)=>{
  try{
    const user=await User.findById(req.user);
    if(!user)return res.status(404).json({message:"User not found"});

    const{name,email,password}=req.body;
    if(name) user.name=name;
    if(email) user.email=email;
    if(password) user.password=await bcrypt.hash(password,10);

    await user.save();
      res.json({message:"Profile Updated Successfully",user});
  }catch(err){
    res.status(500).json({message:"Server Error",err});
  }
};
