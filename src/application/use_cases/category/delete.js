

const deleteCategoryById = async (id, categoryRepositoryInt) => {
    
    return await categoryRepositoryInt.deleteCategory(id)
}

export default deleteCategoryById;