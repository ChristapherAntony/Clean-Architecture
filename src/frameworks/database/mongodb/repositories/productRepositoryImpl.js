import Product from "../models/product.js";

const productRepositoryImpl = () => {

    const addNewProduct = async (productEntity) => {
        const product = new Product(productEntity);
        const newProduct = await product.save();
        return newProduct;
    };

    const updateProductById = async (id, title, price, category) => {
        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            { title, price, category },
            { new: true }
        );
        return updatedProduct;
    };

    const viewAllProducts = async () => {
        const products = await Product.find().populate("category");
        return products;
    };

    const deleteProductById = async (id) => {
        return await Product.findByIdAndDelete(id);
    };

    const viewProductById = async (id) => {
        const product = await Product.findById(id).populate("category");
        return product;
    };
    const findProductByName = async (title) => {
        return await Product.findOne({ title });
    }

    return { addNewProduct, updateProductById, viewAllProducts, deleteProductById, viewProductById, findProductByName };
};

export default productRepositoryImpl;
