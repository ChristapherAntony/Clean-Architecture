

const categoryRepositoryInt = (repository) => {

    const viewAllCategory = () => repository.viewAllCategory();

    const findCategoryByName = (name) => repository.findCategoryByName(name)

    const addNewCategory = (name) => repository.addNewCategory(name)

    const updateCategory = (id, name) => repository.updateCategory(id, name)

    const deleteCategory = (id) => repository.deleteCategory(id)

    const findProductsByCategoryId = (id) => repository.viewAllProductsByCategory(id)

    return { viewAllCategory, findCategoryByName, addNewCategory, updateCategory, deleteCategory, findProductsByCategoryId }
}

export default categoryRepositoryInt;