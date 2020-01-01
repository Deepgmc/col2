const mongoose = require('../db')
const gc = require('../global_constants')

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
    this.resources.oxygen   = gc.START_OXYGEN
    this.resources.water    = gc.START_WATER
    this.resources.food     = gc.START_FOOD
    this.currentDate        = gc.INIT_TIMESTAMP
    this.fields             = [
        //line 0
        [
            {
                id          : '0_0',
                coordinates : [0, 0],
                edifice     : null,
                surface     : null
            }
        ],
        [
            {
                id          : '0_1',
                coordinates : [0, 1],
                edifice     : null,
                surface     : null
            }
        ],
        [
            {
                id          : '0_2',
                coordinates : [0, 2],
                edifice     : null,
                surface     : null
            }
        ],
        [
            {
                id          : '0_3',
                coordinates : [0, 3],
                edifice     : null,
                surface     : null
            }
        ],
        [
            {
                id          : '0_4',
                coordinates : [0, 4],
                edifice     : null,
                surface     : null
            }
        ],
        //line 1
        [
            {
                id          : '1_0',
                coordinates : [1, 0],
                edifice     : null,
                surface     : null
            }
        ],
        [
            {
                id          : '1_1',
                coordinates : [1, 1],
                edifice     : null,
                surface     : null
            }
        ],
        [
            {
                id          : '1_2',
                coordinates : [1, 2],
                edifice     : null,
                surface     : null
            }
        ],
        [
            {
                id          : '1_3',
                coordinates : [1, 3],
                edifice     : null,
                surface     : null
            }
        ],
        [
            {
                id          : '1_4',
                coordinates : [1, 4],
                edifice     : null,
                surface     : null
            }
        ],
        //line 2
        [
            {
                id          : '2_0',
                coordinates : [2, 0],
                edifice     : null,
                surface     : null
            }
        ],
        [
            {
                id          : '2_1',
                coordinates : [2, 1],
                edifice     : null,
                surface     : null
            }
        ],
        [
            {
                id          : '2_2',
                coordinates : [2, 2],
                edifice     : {
                    level: 0,
                    edifice: 'shuttle'//ставим начальный модуль в центр карты
                },
                surface     : null
            }
        ],
        [
            {
                id          : '2_3',
                coordinates : [2, 3],
                edifice     : null,
                surface     : null
            }
        ],
        [
            {
                id          : '2_4',
                coordinates : [2, 4],
                edifice     : null,
                surface     : null
            }
        ],
        //line 3
        [
            {
                id          : '3_0',
                coordinates : [3, 0],
                edifice     : null,
                surface     : null
            }
        ],
        [
            {
                id          : '3_1',
                coordinates : [3, 1],
                edifice     : null,
                surface     : null
            }
        ],
        [
            {
                id          : '3_2',
                coordinates : [3, 2],
                edifice     : null,
                surface     : null
            }
        ],
        [
            {
                id          : '3_3',
                coordinates : [3, 3],
                edifice     : null,
                surface     : null
            }
        ],
        [
            {
                id          : '3_4',
                coordinates : [3, 4],
                edifice     : null,
                surface     : null
            }
        ],
        //line 4
        [
            {
                id          : '4_0',
                coordinates : [4, 0],
                edifice     : null,
                surface     : null
            }
        ],
        [
            {
                id          : '4_1',
                coordinates : [4, 1],
                edifice     : null,
                surface     : null
            }
        ],
        [
            {
                id          : '4_2',
                coordinates : [4, 2],
                edifice     : null,
                surface     : null
            }
        ],
        [
            {
                id          : '4_3',
                coordinates : [4, 3],
                edifice     : null,
                surface     : null
            }
        ],
        [
            {
                id          : '4_4',
                coordinates : [4, 4],
                edifice     : null,
                surface     : null
            }
        ]
    ]
}

const Game = mongoose.model('Game', GameSchema)
module.exports = Game