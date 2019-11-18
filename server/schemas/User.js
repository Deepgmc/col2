const mongoose = require('../db')
const crypto = require('crypto')

const iterations = 3, hashLength = 30

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

function generatePassword(salt, password) {
    return new Promise((resolve, reject) => {
        crypto.pbkdf2(
            password, salt,
            iterations, hashLength, 'sha512',
            (err, key) => {
                if(err) return reject(err)
                resolve(key.toString('hex'))
            }
        )
    })
}

UserSchema.methods.setPassword = async function setPassword(password){
    if(password !== undefined){
        if(password.length < 3){
            throw new Error('Password must be more than 3 symbols')
        }
    }
    this.salt = crypto.randomBytes(hashLength).toString('hex')
    this.passwordHash = generatePassword(this.salt, password)
}
UserSchema.methods.checkPassword = async (password) => {
    if(!password) return false
    const hash = await generatePassword(this.salt, password)
    return hash === this.passwordHash
}

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
