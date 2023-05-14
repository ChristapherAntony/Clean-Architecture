import { ERROR } from "../../../frameworks/webserver/middleware/HttpError.js";


const addNewCategory = async (name, categoryRepositoryInt) => {
    const existingCategory = await categoryRepositoryInt.findCategoryByName(name);
    if (existingCategory) {
        throw new ERROR.CategoryExistsError(`Category ${name} already exists!`);
    }
    
    return await categoryRepositoryInt.addNewCategory(name);
}


export default addNewCategory;