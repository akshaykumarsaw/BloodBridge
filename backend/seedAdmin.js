import mongoose from "mongoose";
import dotenv from "dotenv";
import Admin from "./models/adminModel.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected ✅"))
  .catch(err => console.error(err));

const seedAdmin = async () => {
  try {
    // Remove existing admins
    await Admin.deleteMany({ email: { $in: ["sawakshaykumar@gmail.com", "admin@bloodbridge.org"] } });

    // Create new admin
    const admin = new Admin({
      name: "BloodBridge Admin",
      email: "admin@bloodbridge.org",
      password: "bbms@admin", // will be hashed automatically
      role: "admin",
    });

    await admin.save();
    console.log("Admin seeded successfully ✅");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedAdmin();
