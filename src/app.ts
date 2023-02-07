import "reflect-metadata"
import "express-async-errors"
import express from "express"
import "express-async-errors"
// import sessionRoutes from "./routes/session.routes"
import routes from "./routes/user.routes"
import userRoutes from "./routes/user.routes"
import handleErrorMiddleware from "./middlewares/handleError.middleware"
import sessionRoutes from "./routes/session.routes"
import contactRoutes from "./routes/contact.routes"

const app = express()
app.use(express.json())

app.use("/login", sessionRoutes)
app.use("/users", userRoutes)
app.use("/contacts", contactRoutes)

app.use(handleErrorMiddleware)
app.use(routes)

export default app