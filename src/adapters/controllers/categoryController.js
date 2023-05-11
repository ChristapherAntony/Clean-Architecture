import addNewCategory from "../../application/use_cases/category/create.js";
import deleteCategoryById from "../../application/use_cases/category/delete.js";
import findAll from "../../application/use_cases/category/findAll.js";
import findCategoryByName from "../../application/use_cases/category/findCategoryByName.js";
import updateOneById from "../../application/use_cases/category/updateOneById.js";
import findProductsByCategoryId from "../../application/use_cases/product/findProductsByCategoryId.js";


const categoryController = (categoryRepositoryInt, categoryRepositoryImpl) => {
    const repository = categoryRepositoryInt(categoryRepositoryImpl()) // getting return functions from implements to interface functions

    //view all categories
    const viewAllCategories = async (req, res) => {
        try {
            const allCategories = await findAll(repository)
            res.json(allCategories);
        } catch (error) {
            res.status(500).json({ message: err.message });
        }
    }
    // add a new category 
    const AddNewCategory = async (req, res) => {
        try {
            const { name } = req.body
            const existingCategory = await findCategoryByName(name, repository)
            if (existingCategory) {
                res.status(409).json({ message: 'Category already exists' });
                return;
            }
            const newCategory = await addNewCategory(name, repository)
            res.json(newCategory);
        } catch (error) {
            res.status(500).json({ message: err.message });
        }
    }
    const UpdateCategory = async (req, res) => {
        try {
            const { name } = req.body
            const id = req.params.id
            const updatedCategory = await updateOneById(id, name, repository)
            if (!updatedCategory) {
                return res.status(404).json({ message: 'Category not found' });
            }
            res.json(updatedCategory);

        } catch (error) {
            res.status(500).json({ message: err.message });
        }
    }
    const deleteCategory = async (req, res) => {
        try {
            const { id } = req.params;
            // Check if the category has any associated products
            const products = await findProductsByCategoryId(id, repository)
            if (products.length > 0) {
                res.status(400).json({ message: 'Cannot delete a category with associated products' });
                return;
            }
            // If there are no associated products, delete the category
            let deletedCategory = await deleteCategoryById(id, repository)

            !deletedCategory ? res.status(404).json({ message: 'Category not found' }) : res.status(204).send();

        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err.message });
        }
    }
    return { viewAllCategories, AddNewCategory, UpdateCategory, deleteCategory }
}

export default categoryController;