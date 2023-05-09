import Category from "../../database/mongodb/models/category.js";
import Product from "../../database/mongodb/models/product.js";



const categoryRouter = (express) => {
    const router = express.Router();

    

    // GET route to retrieve all categories
    router.get('/', async (req, res) => {
        try {
            const categories = await Category.find();
            res.json(categories);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    });

    // POST route to create a new category
    router.post('/', async (req, res) => {
        const { name } = req.body;
        try {
            // Check if a category with the given name already exists
            const existingCategory = await Category.findOne({ name });
            if (existingCategory) {
                res.status(409).json({ message: 'Category already exists' });
                return;
            }

            // Create a new category if it doesn't exist yet
            const category = new Category({ name });
            const newCategory = await category.save();
            res.status(201).json(newCategory);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    });

    // PUT route to edit a category name by ID
    router.put('/:id', async (req, res) => {
        const { id } = req.params;
        const { name } = req.body;

        try {
            const updatedCategory = await Category.findByIdAndUpdate(id, { name }, { new: true });
            if (!updatedCategory) {
                res.status(404).json({ message: 'Category not found' });
                return;
            }
            res.json(updatedCategory);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    });


    // DELETE route to delete a category if it has no associated products
    router.delete('/:id', async (req, res) => {
        const { id } = req.params;

        try {
            // Check if the category has any associated products
            const products = await Product.find({ category: id });
            if (products.length > 0) {
                res.status(400).json({ message: 'Cannot delete a category with associated products' });
                return;
            }

            // If there are no associated products, delete the category
            await Category.findByIdAndDelete(id);
            res.status(204).send();
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    });


    return router
}

export default categoryRouter;