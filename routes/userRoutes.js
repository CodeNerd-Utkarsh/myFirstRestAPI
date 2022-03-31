// imports
import express from "express"
// import { v4 as uuidv4 } from 'uuid';
import dummyUsers from "./dummyData.js"
// router init
const router = express.Router()


// custom routes defined for users
//  * create one user
router.post("/", (req, res) => {
    let newUser = req.body;
    dummyUsers.push(newUser)
    res.send("a new user added")
})

// * retrive all users
router.get("/", (req, res) => {
    res.send(dummyUsers);
})

// * retrieve single user
router.get("/:id", (req, res) => {
    const userID = req.params.id
    const userFound = dummyUsers.find((user) => user._id == userID)
    res.send(userFound)
})

// * deleting a user
//  since there is no actual DB. 
// We will return a new copy of dummyUsers excluding the incoming ID 
router.delete("/:id", (req, res) => {
    const userDel = req.params.id
    const remainingUser = dummyUsers.filter((user) => {
        return (user._id !== userDel)
    })
    res.send(remainingUser)
})

// export the router
export default router;