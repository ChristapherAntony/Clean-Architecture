const findCategoryByName = async (name,categoryRepositoryInt) => {
    
    const category = await categoryRepositoryInt.findCategoryByName(name)

    return category
}

export default findCategoryByName;