import mongoose from '../db'



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
    data: {

    },
    timestamps: true
})

const User = mongoose.model('User', UserSchema)

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
})