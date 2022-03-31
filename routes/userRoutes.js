// imports
import express from "express"

// router init
const router = express.Router()


// routes defined for users
router.get("/", (req, res) => {
    res.send("Hello from userRoutes")
})


// export router
export default router;