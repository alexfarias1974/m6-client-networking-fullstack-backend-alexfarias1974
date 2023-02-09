import "reflect-metadata"
import "express-async-errors"
import cors from "cors"
import express from "express"
import routes from "./routes/user.routes"
import userRoutes from "./routes/user.routes"
import sessionRoutes from "./routes/session.routes"
import contactRoutes from "./routes/contact.routes"
import handleErrorMiddleware from "./middlewares/handleError.middleware"


const app = express()
app.use(express.json())

app.use(cors());

app.use("/login", sessionRoutes)
app.use("/users", userRoutes)
app.use("/contacts", contactRoutes)

app.use(handleErrorMiddleware)
app.use(routes)

export default app