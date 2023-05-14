import { ERROR } from "../../../frameworks/webserver/middleware/HttpError.js";

// This function deletes a category by its ID. If the category has associated products,
// it throws a CategoryHasProductsError, which is defined in the ERROR object.
const deleteCategoryById = async (id, categoryRepositoryInt) => {

    let products = await categoryRepositoryInt.findProductsByCategoryId(id);

    if (products?.length > 0) {
        throw new ERROR.CategoryHasProductsError('Cannot delete a category with associated products')
    }

    // If there are no associated products, delete the category and return the result
    let deletedCategory = await categoryRepositoryInt.deleteCategory(id)

    if (!deletedCategory) {
        throw new ERROR.NotFoundError('Category not found')
    }

    return deletedCategory
}

export default deleteCategoryById;
