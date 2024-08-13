const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://21btrcl126:KXXpgQnJ4AW8BG42@cluster0.ykzng.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

//register
app.post('/api/register', async (req,res) => {
    try {
        const newPassword = await bcrypt.hash(req.body.password, 10)
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: newPassword,
        })
        res.json({status: 'ok'})
    } catch (err) {
        res.json({status: 'error', error: 'Duplicate email'})
    }
})

//login
app.post('/api/login', async (req,res) => {
        const user = await User.findOne({
            email: req.body.email,
        })

        if(!user) {
            return {status: 'error', error: 'invalid login'}
        }

        const isPasswordValid = await bcrypt.compare(req.body.password, user.password)

        if (isPasswordValid) {

            const token = jwt.sign({
                Name: user.name,
                email: user.email,
            }, 'secret123', { expiresIn: '1h' })

            return res.json( {status: 'ok', user: token} )
        } else {
            return res.json( {status: 'error', user: false} )
        }
    })

//quote get

app.get('/api/quote', async (req,res) => {

   try {
    const token = req.headers['x-access-token']
    const decode = jwt.verify(token, 'secret123')
    const email = decode.email
    const user = await User.findOne({ email: email })

    return res.json({status: 'ok', quote:user.quote})
} catch (err){
    console.log(err)
    res.json({status: 'error', error: 'invalid token'})

}
   }
)
//quote post
app.post('/api/quote', async (req,res) => {

    try {
     const token = req.headers['x-access-token']
     const decode = jwt.verify(token, 'secret123')
     const email = decode.email
     const user = await User.updateOne({ email: email }, {$set: {quote: req.body.quote}})
 
     return {status: 'ok', quote:user.quote}
 } catch (err){
     console.log(err)
     res.json({status: 'error', error: 'invalid token'})
 
 }
    }
 )
 


app.listen(1337, () => {
    console.log('server started on 1337')
})