import app from "./App.js"

app.listen(process.env.PORT, () => {
    console.log(`Server running on Port ${process.env.PORT}`)
})
