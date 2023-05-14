import CategoryEntity from "../../../entities/category.js";
import { ERROR } from "../../../frameworks/webserver/middleware/HttpError.js";


const addNewCategory = async (name, categoryRepositoryInt) => {


    const existingCategory = await categoryRepositoryInt.findCategoryByName(name);

    if (existingCategory) {
        throw new ERROR.CategoryExistsError(`Category ${name} already exists!`);
    }
    const categoryEntity = new CategoryEntity(name)
    return await categoryRepositoryInt.addNewCategory(categoryEntity);
}


export default addNewCategory;