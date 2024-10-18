const express = require('express')
const connectDB = require('./config/connect');
const { errorHandler, notFound } = require('./middlewares/error');
const cors = require('cors')

// Connected to database
connectDB().then(() => {
    // Running the server
    const PORT = process.env.PORT || 8000
    app.listen(PORT, () => {
        console.log(`SERVER is running in ${process.env.NODE_ENV} mode on port: ${PORT}`)
    })
}).catch(error => {
    console.error(`Failed to connect to the database: ${error}`);
});

// Init app
const app = express()

// Middlewares
app.use(express.json())

// Cors policy
app.use(cors({
    origin: "http://localhost:5173"
}))

// Routes
app.use('/auth', require('./routes/authRoute'))
app.use('/users', require('./routes/usersRoute'))
app.use('/posts', require('./routes/postsRoute'))
app.use('/comments', require('./routes/commentsRoute'))
app.use('/categories', require('./routes/categoriesRoute'))

// Error handler middleware
app.use(notFound)
app.use(errorHandler)