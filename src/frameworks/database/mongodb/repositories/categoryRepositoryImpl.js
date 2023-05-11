import Category from "../models/category.js";
import Product from "../models/product.js";


const categoryRepositoryImpl = () => {


    const viewAllCategory = async () => {
        const categories = await Category.find();
        return categories
    }

    const findCategoryByName = async (name) => {
        const existingCategory = await Category.findOne({ name });
        return existingCategory
    }

    const addNewCategory = async (name) => {
        const category = new Category({ name });
        const newCategory = await category.save();
        return newCategory
    }

    const updateCategory = async (id, name) => {
        console.log(id, name);
        const updatedCategory = await Category.findByIdAndUpdate(id, { name }, { new: true });
        console.log(updateCategory);
        return updatedCategory
    }

    const deleteCategory = async (id) => {       
        return await Category.findByIdAndDelete(id);
    }
    const viewAllProductsByCategory = async (id) => {
        const products = await Product.find({ category: id });
        return products
    }

    return { addNewCategory, viewAllCategory, updateCategory, findCategoryByName, deleteCategory, viewAllProductsByCategory }
}

export default categoryRepositoryImpl; 