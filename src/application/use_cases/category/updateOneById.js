
const updateOneById =async (id,name, categoryRepositoryInt) => {
    // to find the category
    let existingCategory= await categoryRepositoryInt.updateCategory(id,name);

    return existingCategory
}

export default updateOneById;