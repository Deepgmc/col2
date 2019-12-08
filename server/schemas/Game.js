const mongoose = require('../db')

const GameSchema = new mongoose.Schema({
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: 'No user id at game object',
            unique: true
        },
        currentDate: Number
    }
)

GameSchema.methods.generateInitialField = async function generateInitialField(){
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
                edifice     : null,
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
        ]
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