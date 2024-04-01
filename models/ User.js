const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        mobile: {
            type: String,
            required: true
        },
        emargencyMobile : {
            type: String,
            required: true
        },
        department: {
            type: String,
            required: true
        },
        employeeID: {
            type: String,
            required: true
        },
        designation: {
            type: String,
            required: true
        },
        presentaddress: {
            type: String,
            required: true,
        },
        permanentaddress: {
            type: String,
        },
        city: {
            type: String,
        },
        country: {
            type: String
        },
        imagePath: {
            type: String,
            requried: true
        },
        password: {
            type: String,
            required: true,
        },
        concern : {
            type : String,
            ref : "concern"
        },
        department : {
            type : String,
            ref : "department"
        },
        role: {
            type: String,
            enum: ["admin", "hrm", "employee"],
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

module.exports = mongoose.model("User", userSchema);
