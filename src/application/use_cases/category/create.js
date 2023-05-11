

const addNewCategory = async (name,categoryRepositoryInt) => {
    const category = await categoryRepositoryInt.addNewCategory(name)
    return category
}

export default addNewCategory;