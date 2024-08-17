const jwt =require("jsonwebtoken")
const auth = (req,res,next) =>{
    const token = req.header("Authorization"); // Token is typically sent in the "Authorization" header
    const filterToken = token.split(" ")[1]
    console.log(filterToken)
    if (!token) {
        return res.status(403).send("Access denied. No token provided.");
    }

    try {
        const decoded = jwt.verify(filterToken, process.env.SECRET); // Verify the token
        console.log(decoded) // Attach decoded user info to request object
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        res.status(401).send("Invalid token.");
    }
}

module.exports = auth