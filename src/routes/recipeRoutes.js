const express = require('express');
const RecipeController = require('../controllers/recipeController');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.get('/search', RecipeController.searchIngredients);
router.get('/recommended', authMiddleware, RecipeController.getRecommendedRecipes);
router.get('/bookmarked', authMiddleware, RecipeController.getBookmarkedRecipes);

router.post('/bookmark/:recipeId', authMiddleware, RecipeController.addBookmark);

module.exports = router;