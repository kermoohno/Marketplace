const { Item } = require('../models');

const createItem = async (req, res) => {
    try {
      // Exclude the 'id' field from the request body
      const { id, ...itemData } = req.body;
  
      // Create the item using the remaining itemData
      const newItem = await Item.create(itemData);
  
      // Send the created item in the response
      res.status(201).json(newItem);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create item' });
    }
  };

const getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Item.findByPk(id);
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.status(200).json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch item' });
  }
};

const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedItem = await Item.update(req.body, { where: { id } });
    res.status(200).json(updatedItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update item' });
  }
};

const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    await Item.destroy({ where: { id } });
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete item' });
  }
};

module.exports = {
  createItem,
  updateItem,
  deleteItem,
  getItem
};
