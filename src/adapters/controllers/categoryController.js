import addNewCategory from "../../application/use_cases/category/create.js";
import deleteCategoryById from "../../application/use_cases/category/delete.js";
import findAll from "../../application/use_cases/category/findAll.js";
import updateOneById from "../../application/use_cases/category/updateOneById.js";




const categoryController = (categoryRepositoryInt, categoryRepositoryImpl) => {
    const repository = categoryRepositoryInt(categoryRepositoryImpl()) // getting return functions from implements to interface functions

    //view all categories
    const viewAllCategories = async (req, res, next) => {
        try {
            const allCategories = await findAll(repository)
            res.json(allCategories);
        } catch (error) {
            next(error)
        }
    }

    // add a new category 
    const AddNewCategory = async (req, res, next) => {
        try {
            const { name } = req.body
            const newCategory = await addNewCategory(name, repository)
            res.status(200).json(newCategory);
        } catch (error) {
            next(error);
        }
    }

    const UpdateCategory = async (req, res, next) => {
        try {
            const { name } = req.body
            const id = req.params.id
            const updatedCategory = await updateOneById(id, name, repository)
            res.status(200).json(updatedCategory)
        } catch (error) {
            next(error);
        }
    }
    const deleteCategory = async (req, res, next) => {
        try {
            const { id } = req.params;

            await deleteCategoryById(id, repository)

            res.status(204).json({ message: "Category deleted successfully" });
        } catch (error) {
            next(error);
        }
    }
    
    return { viewAllCategories, AddNewCategory, UpdateCategory, deleteCategory }
}

export default categoryController;