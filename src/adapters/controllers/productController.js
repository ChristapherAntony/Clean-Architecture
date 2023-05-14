import addNewProduct from "../../application/use_cases/product/create.js";
// import deleteProductById from "../../application/use_cases/product/delete.js";
import findAll from "../../application/use_cases/product/findAll.js";
// import updateOneById from "../../application/use_cases/product/updateOneById.js";

const productController = (productRepositoryInt, productRepositoryImpl, categoryRepositoryInt, categoryRepositoryImpl) => {
    const productRepository = productRepositoryInt(productRepositoryImpl());
    const categoryRepository = categoryRepositoryInt(categoryRepositoryImpl())


    const listProducts = async (req, res, next) => {
        try {
            const allProducts = await findAll(productRepository);
            res.json(allProducts);
        } catch (error) {
            next(error);
        }
    };

    const createProduct = async (req, res, next) => {
        try {
            const { title, price, categoryId } = req.body;
            const newProduct = await addNewProduct(title, price, categoryId, productRepository, categoryRepository);
            res.status(201).json(newProduct);
        } catch (error) {
            next(error);
        }
    };

    // const updateProductHandler = async (req, res, next) => {
    //     try {
    //         const { name, price, categoryId } = req.body;
    //         const id = req.params.id;
    //         const updatedProduct = await updateOneById(id, name, price, categoryId, repository);
    //         res.status(200).json(updatedProduct);
    //     } catch (error) {
    //         if (error instanceof ERROR.CategoryNotFoundError) {
    //             next(new ERROR.CategoryNotFoundError('Category not found.'));
    //         } else {
    //             next(error);
    //         }
    //     }
    // };

    // const deleteProductHandler = async (req, res, next) => {
    //     try {
    //         const { id } = req.params;
    //         await deleteProductById(id, repository);
    //         res.status(204).json({ message: "Product deleted successfully" });
    //     } catch (error) {
    //         next(error);
    //     }
    // };

    return { listProducts, createProduct };
};

export default productController;
