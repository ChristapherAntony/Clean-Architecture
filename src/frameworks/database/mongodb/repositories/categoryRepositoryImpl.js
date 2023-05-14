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

    const findCategoryById = async (id) => {
        const existingCategory = await Category.findById(id);
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

    const addProductToCategory = async (categoryId, productId) => {
        const category = await Category.findById(categoryId);
        if (!category) {
            throw new Error('Category not found');
        }
        category.products.push(productId);
        await category.save();
    };

    const removeProductFromCategory = async (categoryId, productId) => {
        const category = await Category.findById(categoryId);
        if (!category) {
            throw new Error('Category not found');
        }
        category.products = category.products.filter((id) => id.toString() !== productId.toString());
        await category.save();
    };

    return {
        addNewCategory, viewAllCategory, updateCategory, findCategoryByName, deleteCategory, viewAllProductsByCategory,
        findCategoryById, addProductToCategory, removeProductFromCategory
    }
}

export default categoryRepositoryImpl; 