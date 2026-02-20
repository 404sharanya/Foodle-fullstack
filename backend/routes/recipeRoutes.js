import express from 'express';
import mongoose from 'mongoose';
import Recipe from '../models/Recipe.js';

const router = express.Router();


router.post("/", async (req, res) => {
    try{
        const newRecipe = await Recipe.create(req.body);
        res.status(201).json(newRecipe);
    } catch(error){
        res.status(400).json({message: error.message});
    }
});

router.get("/", async (req, res) => {
   
   try{
        const filter = {};

        // country filter, converting to lowercase for case-insensitive matching
        if(req.query.country){
            filter.country = req.query.country.toLowerCase();
        }
        const recipes = await Recipe.find(filter);
        res.status(200).json(recipes);
   } catch(error){
        res.status(500).json({message: error.message});
   }
});

router.get("/:id", async (req, res) => {
    try{
        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
    return res.status(400).json({message: "Invalid recipe ID"});
}

        const recipe = await Recipe.findById(req.params.id);
        if(!recipe){
            return res.status(404).json({message: "Recipe not found"});
        }
        res.status(200).json(recipe);
    
} catch(error){
        res.status(500).json({message: error.message});
}
});

router.delete("/:id", async(req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        return res.status(400).json({message: "Invalid recipe ID"})
    }

    try{
        //delete recipe
        const deletedRecipe = await Recipe.findByIdAndDelete(id);
        //checking if recipe exists
        if(!deletedRecipe){
            return res.status(404).json({message: "Recipe not found"})
        }
        //success
        res.status(200).json({message: "Recipe deleted successfully"});
    }catch(error){
        return res.status(500).json({message: error.message})
    }
});

router.patch("/:id", async(req, res) => {
    const {id} =  req.params;
    //validate id
        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            return res.status(400).json({message: "Invalid recipe ID"});
        }
    try{
        const updateRecipe = await Recipe.findByIdAndUpdate(
            id, 
            req.body,
            {
                new: true,
                runValidators: true
        });

        if(!updateRecipe){
            return res.status(404).json({message: "Recipe not found"});
        }

        res.status(200).json(updateRecipe);
        
    }catch(error){
        res.status(500).json({message: error.message});
    }
})

export default router;