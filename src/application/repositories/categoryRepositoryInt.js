

const categoryRepositoryInt = (repository) => {

    const viewAllCategory = () => repository.viewAllCategory();

    const findCategoryByName = (name) => repository.findCategoryByName(name)

    const findCategoryById = (id) => repository.findCategoryById(id)

    const addNewCategory = (name) => repository.addNewCategory(name)

    const updateCategory = (id, name) => repository.updateCategory(id, name)

    const deleteCategory = (id) => repository.deleteCategory(id)

    const findProductsByCategoryId = (id) => repository.viewAllProductsByCategory(id)

    const addProductToCategory = (categoryId, productId) => repository.addProductToCategory(categoryId, productId)

    const removeProductFromCategory = (categoryId, productId) => repository.removeProductFromCategory(categoryId, productId)

    return {
        viewAllCategory, findCategoryByName, addNewCategory, updateCategory, deleteCategory, findProductsByCategoryId,
        findCategoryById, addProductToCategory, removeProductFromCategory
    }
}

export default categoryRepositoryInt;