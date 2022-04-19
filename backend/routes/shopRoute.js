const express =require("express");
const { getAllShops, createShop, updateShop, deleteShop, getShopDetails, createShopReview, getShopReviews, deleteReview } = require("../controllers/shopController");
const { isAuthenticatedUser,authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/shops").get(getAllShops);
router.route("/admin/shop/new").post(isAuthenticatedUser,authorizeRoles("admin"), createShop);
router.route("/admin/shop/:id")
.put(isAuthenticatedUser, authorizeRoles("admin"),updateShop)
.delete(isAuthenticatedUser,authorizeRoles("admin"), deleteShop);

router.route("/shop/:id").get(getShopDetails);


router.route("/shop/review").put(isAuthenticatedUser, createShopReview);

router.route("/shop/reviews").get(getShopReviews).delete(isAuthenticatedUser,deleteReview);



module.exports = router