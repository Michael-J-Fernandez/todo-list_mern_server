const express = require("express");
const router = express.Router();
const ToDo = require('../models/TodosModel')

// GET All
router.get("/", async function(req, res, next) {
    const results = await ToDo.find({})
    res.json(results)
});

// GET One by id
router.get("/:id", async function(req, res, next) {
    const results = await ToDo.find({_id: req.params.id})
    res.json(results)
});

// POST one
router.post("/", async function(req, res, next) {

    const results = await ToDo.create( req.body )
    res.json(results)
});

// UPDATE one by id
router.put("/:id", async function(req, res, next) {

    const results = await ToDo.updateOne({_id: req.params.id}, req.body)
    res.json(results)
});

// DELETE one by id
router.delete("/:id", async function(req, res, next) {
    const results = await ToDo.deleteOne({ _id: req.params.id })
    res.json(results)
});


module.exports = router;
