const express = require("express");
const {
  createMenu,
  getMenus,
  getMenuById,
  updateMenu,
  deleteMenu,
  addMenuItem,
  deleteMenuItem,
} = require("../controllers/menu.controllers");
const router = express.Router();

// CRUD Operations for menu
router.post("/", createMenu);
router.get("/", getMenus);
router.get("/:id", getMenuById);
router.put("/:id", updateMenu);
router.delete("/:id", deleteMenu);

// CRUD Operations for menu items
router.post("/:id/items", addMenuItem);
router.put("/:menuId/items/:itemId", updateMenu);
router.delete("/:menuId/items/:itemId", deleteMenuItem);

module.exports = router;
