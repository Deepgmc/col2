const mongoose = require('../db')
const crypto = require('crypto')



const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Укажите имя пользователя'
    },
    email: {
        type: String,
        required: 'Укажите email',
        unique: true,
        validate: [{
            validator: function(val){
                return /^[-.\w]+@([\w-]+\.)+[\w-]{2,12}$/.test(val)
            },
            message: 'Невалидный email'
        }]
    },
    passwordHash: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    },
    data: {

    }
    },
    {
        timestamps:
            {
                createdAt: 'created_at',
                updatedAt: 'updated_at'
            }
    }
)
const User = mongoose.model('User', UserSchema)
module.exports = User

/*
const admin = new User({
    name: 'admin',
    email: 'admin@admin.com'
})

User.remove()
.then((user) => {
    return admin.save()
})
.catch(console.error)
.finally(() => {
    mongoose.disconnect()
})*/
