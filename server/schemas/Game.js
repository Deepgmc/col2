const mongoose = require('../db')
const edifices = require('../../server/gameObjects/edifices')

const GameSchema = new mongoose.Schema({
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: 'No user id at game object',
            unique: true
        },
        fields: {
            type: mongoose.Schema.Types.Array,
            required: true
        },
        resources: {
            oxygen: mongoose.Schema.Types.Number,
            water: mongoose.Schema.Types.Number,
            food: mongoose.Schema.Types.Number
        },
        currentDate: Number
    }
)

GameSchema.methods.generateInitialField = async function generateInitialField(){
    this.resources.oxygen = 1000
    this.resources.water = 100
    this.resources.food = 100
    this.fields = [
        //line 0
        [
            {
                coordinates : [0, 0],
                edifice     : null,
                surface     : null
            }
        ],
        [
            {
                coordinates : [0, 1],
                edifice     : null,
                surface     : null
            }
        ],
        [
            {
                coordinates : [0, 2],
                edifice     : null,
                surface     : null
            }
        ],
        [
            {
                coordinates : [0, 3],
                edifice     : null,
                surface     : null
            }
        ],
        [
            {
                coordinates : [0, 4],
                edifice     : null,
                surface     : null
            }
        ],
        //line 1
        [
            {
                coordinates : [1, 0],
                edifice     : null,
                surface     : null
            }
        ],
        [
            {
                coordinates : [1, 1],
                edifice     : null,
                surface     : null
            }
        ],
        [
            {
                coordinates : [1, 2],
                edifice     : null,
                surface     : null
            }
        ],
        [
            {
                coordinates : [1, 3],
                edifice     : null,
                surface     : null
            }
        ],
        [
            {
                coordinates : [1, 4],
                edifice     : null,
                surface     : null
            }
        ],
        //line 2
        [
            {
                coordinates : [2, 0],
                edifice     : null,
                surface     : null
            }
        ],
        [
            {
                coordinates : [2, 1],
                edifice     : null,
                surface     : null
            }
        ],
        [
            {
                coordinates : [2, 2],
                edifice     : {
                    level: 0,
                    edifice: edifices.shuttle//ставим начальный модуль в центр карты
                },
                surface     : null
            }
        ],
        [
            {
                coordinates : [2, 3],
                edifice     : null,
                surface     : null
            }
        ],
        [
            {
                coordinates : [2, 4],
                edifice     : null,
                surface     : null
            }
        ],
        //line 3
        [
            {
                coordinates : [3, 0],
                edifice     : null,
                surface     : null
            }
        ],
        [
            {
                coordinates : [3, 1],
                edifice     : null,
                surface     : null
            }
        ],
        [
            {
                coordinates : [3, 2],
                edifice     : null,
                surface     : null
            }
        ],
        [
            {
                coordinates : [3, 3],
                edifice     : null,
                surface     : null
            }
        ],
        [
            {
                coordinates : [3, 4],
                edifice     : null,
                surface     : null
            }
        ],
        //line 4
        [
            {
                coordinates : [4, 0],
                edifice     : null,
                surface     : null
            }
        ],
        [
            {
                coordinates : [4, 1],
                edifice     : null,
                surface     : null
            }
        ],
        [
            {
                coordinates : [4, 2],
                edifice     : null,
                surface     : null
            }
        ],
        [
            {
                coordinates : [4, 3],
                edifice     : null,
                surface     : null
            }
        ],
        [
            {
                coordinates : [4, 4],
                edifice     : null,
                surface     : null
            }
        ]
    ]
}

const Game = mongoose.model('Game', GameSchema)
module.exports = Game