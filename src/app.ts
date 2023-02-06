import "reflect-metadata"
import "express-async-errors"
import express from "express"
import "express-async-errors"
// import sessionRoutes from "./routes/session.routes"
import userRoutes from "./routes/user.routes"
// import contactRoutes from "./routes/contact.routes"

const app = express()
app.use(express.json())

// app.use("/login", sessionRoutes)
app.use("/users", userRoutes)
// app.use("/contacts", contactRoutes)

export default app