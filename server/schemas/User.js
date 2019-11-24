const mongoose = require('../db')
const crypto = require('crypto')

const UserSchema = new mongoose.Schema({
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
UserSchema.methods.setPassword = async function setPassword(password){
    if(password !== undefined){
        if(password.length < 3){
            throw new Error('Password must be more than 3 symbols')
        }
    }
    this.salt = crypto.randomBytes(30).toString('hex')
    this.passwordHash = await generatePassword(this.salt, password)
}
UserSchema.methods.checkPassword = async function(password) {
    if(!password) return false
    const hash = await generatePassword(this.salt, password)
    return hash === this.passwordHash
}

const User = mongoose.model('User', UserSchema)

module.exports = User

function generatePassword(salt, password) {
    return new Promise((resolve, reject) => {
        const buffer = new Buffer(salt, 'binary')
        console.log('SDFSDFSDFDSFDSF', password, buffer);
        crypto.pbkdf2(
            password, buffer,
            3, 30, 'sha512',
            (err, key) => {
                if(err) return reject(err)
                resolve(key.toString('hex'))
            }
        )
    })
}