import express from "express";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
import connectDb from "./lib/connectDb.js";

const app = express();

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);


app.listen(3000, () => {
    console.log("Server is running on port 3000");
    connectDb();
});



