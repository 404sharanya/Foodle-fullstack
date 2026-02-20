import mongoose from "mongoose";


const recipeSchema = new mongoose.Schema({
    country: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    dishName: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true,
    },
    servings: {
        type: Number,
        required: true,
        min: 1
    },
    components: [
        {
            name: {type: String, required: true, trim: true},
            ingredients: [
                {
                    name: {
                        type: String,
                        required: true,
                        trim: true
                    },
                    units: {
                        type: Map,
                        of: Number,
                        required: true
                    }
        }
    ]
}],
    steps: [
        {
            name: {
                type: String,
                required: true
            },
            instructions: {
                type: [String],
                required: true
            }
        }
    ]
}, {timestamps: true});



export default mongoose.model("Recipe", recipeSchema);