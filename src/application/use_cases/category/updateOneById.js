import { ERROR } from "../../../frameworks/webserver/middleware/HttpError.js";

const updateOneById = async (id, name, categoryRepositoryInt) => {
    // to find the category
    let existingCategory = await categoryRepositoryInt.updateCategory(id, name);

    if (!existingCategory) throw new ERROR.CategoryNotFoundError('you were trying to update category not exists')

    return existingCategory
}

export default updateOneById;