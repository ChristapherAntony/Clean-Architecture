import { ERROR } from "../../../frameworks/webserver/middleware/HttpError.js";

const addNewProduct = async (title, price, categoryId, productRepositoryInt, categoryRepositoryInt) => {
    // check if the category exists
    const existingCategory = await categoryRepositoryInt.findCategoryById(categoryId);
    if (!existingCategory) {
        throw new ERROR.CategoryNotFoundError(`Category with id ${categoryId} not found!`);
    }
    //need to check the product already exists or not
    const existingProduct = await productRepositoryInt.findProductByName(title)

    if (existingProduct) {
        throw new ERROR.ProductExistsError(`Product with title exists`)
    }
    // create a new product
    const newProduct = await productRepositoryInt.addNewProduct(title, price, categoryId);
    //then i need to push the product id to the category to easy tract of products under that category

    await categoryRepositoryInt.addProductToCategory(categoryId, newProduct._id)


    return newProduct;
};

export default addNewProduct;
