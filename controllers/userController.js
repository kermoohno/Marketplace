const { User } = require('../models');

const createUser = async (req, res) => {
  try {
    const { name, password, email, admin } = req.body;
    const newUser = await User.create({ name, password, email, admin });
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create user' });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch user' });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, password, email, admin } = req.body;
    const updatedUser = await User.update({ name, password, email, admin }, { where: { id } });
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update user' });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.destroy({ where: { id } });
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete user' });
  }
};


module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getUser
};
