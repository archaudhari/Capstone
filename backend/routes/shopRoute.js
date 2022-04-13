const express =require("express");
const { getAllShops, createShop, updateShop, deleteShop, getShopDetails } = require("../controllers/shopController");
const router = express.Router();

router.route("/shops").get(getAllShops);
router.route("/shop/new").post(createShop);
router.route("/shop/:id").put(updateShop).delete(deleteShop).get(getShopDetails);


module.exports = router