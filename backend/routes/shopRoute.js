const express =require("express");
const { getAllShops, createShop, updateShop, deleteShop, getShopDetails } = require("../controllers/shopController");
const { isAuthenticatedUser,authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/shops").get(getAllShops);
router.route("/shop/new").post(isAuthenticatedUser,authorizeRoles("admin"), createShop);
router.route("/shop/:id")
.put(isAuthenticatedUser, authorizeRoles("admin"),updateShop)
.delete(isAuthenticatedUser,authorizeRoles("admin"), deleteShop)
.get(getShopDetails);


module.exports = router