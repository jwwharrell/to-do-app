const express = require('express')

const itemApi = require('../../models/item/item.js')

const itemRouter = express.Router()

//Get all
itemRouter.get('/', (req, res) => {
  itemApi.getAllItems()
    .then((allItems) => {
      res.json(allItems)
    })
})

//Get one
itemRouter.get('/:itemId', (req,res) => {
  itemApi.getItemById(req.params.itemId)
    .then((singleItem) => {
      res.json(singleItem)
    })
})

//Create One
itemRouter.post('/', (req, res) => {
  itemApi.addNewItem(req.body)
    .then((newItem) => {
      res.json(newItem)
    })
})

//Update One
itemRouter.put('/:itemId', (req, res) => {
  itemApi.updateCurrentItem(req.params.itemId, req.body)
    .then((updatedItem) => {
      res.json(updatedItem)
    })
})

//Delete One
itemRouter.delete('/:itemId', (req, res) => {
  itemApi.deleteCurrentItem(req.params.itemId)
    .then((deletedItem) => {
      res.json(deletedItem)
    })
})


module.exports = {
  itemRouter
}
