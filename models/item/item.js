const mongoose = require('../connection.js')

const ItemModelSchema = new mongoose.Schema({
  name: String,
  description: String
})

const ItemCollection = mongoose.model('Item', ItemModelSchema)


const getAllItems = () => {
  return ItemCollection.find({})
}

const getItemById = (itemId) => {
  return ItemCollection.findById(itemId)
}

const addNewItem = (newItem) => {
  return ItemCollection.create(newItem)
}

const updateCurrentItem = (itemId, updatedItem) => {
  return ItemCollection.updateOne({ _id: itemId }, updatedItem)
} 

const deleteCurrentItem = (itemId) => {
  return ItemCollection.deleteOne({ _id: invoiceId })
}

module.exports = {
  getAllItems,
  getItemById,
  addNewItem,
  updateCurrentItem,
  deleteCurrentItem
}
