const express = require('express')
const connectDB = require('./config/connect')


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

// Routes
app.use('/auth', require('./routes/authRoute'))
app.use('/users', require('./routes/usersRoute'))