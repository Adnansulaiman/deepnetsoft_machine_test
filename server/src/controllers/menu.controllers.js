const Menu = require("../models/Menu");


// Create a new menu
const createMenu = async (req, res) => {
  try {
    const { name, description } = req.body;

    const newMenu = new Menu({
      name,
      description,
      items: [], // Empty array for now
    });

    await newMenu.save();
    res.status(201).json({ message: "Menu created successfully!", menu: newMenu });
  } catch (error) {
    res.status(500).json({ error: "Error creating menu", details: error.message });
  }
};

// Get all menus
const getMenus = async (req, res) => {
  try {
    const menus = await Menu.find();
    res.status(200).json(menus);
  } catch (error) {
    res.status(500).json({ error: "Error fetching menus", details: error.message });
  }
};

// Get a single menu by ID
const getMenuById = async (req, res) => {
  try {
    const menu = await Menu.findById(req.params.id);
    if (!menu) return res.status(404).json({ error: "Menu not found" });

    res.status(200).json(menu);
  } catch (error) {
    res.status(500).json({ error: "Error fetching menu", details: error.message });
  }
};

// Add an item to a menu
const addMenuItem = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const menu = await Menu.findById(req.params.id);

    if (!menu) return res.status(404).json({ error: "Menu not found" });

    const newItem = { name, description, price };
    menu.items.push(newItem);

    await menu.save();
    res.status(201).json({ message: "Item added successfully!", menu });
  } catch (error) {
    res.status(500).json({ error: "Error adding item", details: error.message });
  }
};

// Update a menu
const updateMenu = async (req, res) => {
  try {
    const updatedMenu = await Menu.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updatedMenu) return res.status(404).json({ error: "Menu not found" });

    res.status(200).json({ message: "Menu updated successfully!", menu: updatedMenu });
  } catch (error) {
    res.status(500).json({ error: "Error updating menu", details: error.message });
  }
};

// Update a menu item
const updateMenuItem = async (req, res) => {
  try {
    const { menuId, itemId } = req.params;
    const { name, description, price } = req.body;

    const menu = await Menu.findById(menuId);
    if (!menu) return res.status(404).json({ error: "Menu not found" });

    const item = menu.items.id(itemId);
    if (!item) return res.status(404).json({ error: "Item not found" });

    item.name = name || item.name;
    item.description = description || item.description;
    item.price = price || item.price;

    await menu.save();
    res.status(200).json({ message: "Item updated successfully!", menu });
  } catch (error) {
    res.status(500).json({ error: "Error updating item", details: error.message });
  }
};

// Delete a menu
const deleteMenu = async (req, res) => {
  try {
    const deletedMenu = await Menu.findByIdAndDelete(req.params.id);
    if (!deletedMenu) return res.status(404).json({ error: "Menu not found" });

    res.status(200).json({ message: "Menu deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting menu", details: error.message });
  }
};

// Delete a menu item
const deleteMenuItem = async (req, res) => {
  try {
    const { menuId, itemId } = req.params;

    const menu = await Menu.findById(menuId);
    if (!menu) return res.status(404).json({ error: "Menu not found" });

    menu.items = menu.items.filter((item) => item._id.toString() !== itemId);
    await menu.save();

    res.status(200).json({ message: "Item deleted successfully!", menu });
  } catch (error) {
    res.status(500).json({ error: "Error deleting item", details: error.message });
  }
};


module.exports = {
  createMenu,
  getMenus,
  getMenuById,
  addMenuItem,
  updateMenu,
  updateMenuItem,
  deleteMenu,
  deleteMenuItem,
};