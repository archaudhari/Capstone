const express =require("express");
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails, createProductReview, getProductReviews } = require("../controllers/productController");
const { deleteReview } = require("../controllers/shopController");
const { isAuthenticatedUser,authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/products").get( getAllProducts);

router.route("/seller/product/new").post(isAuthenticatedUser,authorizeRoles("seller"),createProduct);
router.route("/seller/product/:id")
.put(isAuthenticatedUser,authorizeRoles("seller"),updateProduct)
.delete(isAuthenticatedUser,authorizeRoles("seller"),deleteProduct);

router.route("/product/:id").get(getProductDetails);

router.route("/review").put(isAuthenticatedUser, createProductReview);

router.route("/reviews").get(getProductReviews).delete(isAuthenticatedUser,deleteReview);

module.exports = router