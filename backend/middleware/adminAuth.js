import  jwt  from 'jsonwebtoken';

// const adminAuth = async (req, res, next) => {
//     try {

//         const { token } = req.headers;
//         if (!token) {
//             return res.json({ success: false, message: "Not Authorized login Again" });
//         }
//         const token_decode = jwt.verify(token, process.env.JWT_SECRET);
//         if (token_decode.email !== process.env.ADMIN_EMAIL) {
//     return res.json({ success: false, message: "Not Authorized login Again" });
//         }
//         next();
//     } catch (error) {
//         res.status(401).json({ message: "Unauthorized" });
//         console.log(error);
//     }
// };

// export default adminAuth;
const adminAuth = async (req, res, next) => {
    try {
        const { token } = req.headers;
        
        if (!token) {
            return res.json({ success: false, message: "Not Authorized login Again" });
        }

        // عشان نشوف الـ token
        console.log("Token received:", token);
        
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        
        // عشان نشوف الـ decoded token
        console.log("Decoded token:", token_decode);
        console.log("Token email:", token_decode.email);
        console.log("Admin email:", process.env.ADMIN_EMAIL);
        
        if (token_decode.email !== process.env.ADMIN_EMAIL) {
            return res.json({ success: false, message: "Not Authorized login Again" });
        }
        
        next();
    } catch (error) {
        console.log("Error in auth:", error.message);
        res.status(401).json({ message: "Unauthorized", error: error.message });
    }
};

export default adminAuth;