const { error } = require("console")
const Goals = require("../models/goalsmodel") 
const asyncHandler = require("express-async-handler")




const Getgoals = asyncHandler(async( req , res) => {
    
    const goal = await Goals.find()
    
    res.status(200).json(goal)
    })

    
const Postgoals = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400).json({ error: 'Text is required' });
    } else {
        const goal = await Goals.create({
            Text: req.body.text
        });
        res.status(201).json(goal);
    }
});



const deletegoals = asyncHandler(async  (req , res) => {
        res.status(200).json({  
            msg : `'Delete' ${req.params.id}`
        })
    })

const updategoals = asyncHandler(async(req , res) => {
        res.status(200).json({
            msg : `'put/update' ${req.params.id}`
        })
    } )
    
module.exports = { deletegoals , updategoals , Postgoals , Getgoals}