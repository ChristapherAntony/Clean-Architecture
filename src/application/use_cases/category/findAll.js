

const findAll = async (categoryRepositoryInt) => {
    
    const categories = await categoryRepositoryInt.viewAllCategory()

    return categories
}

export default findAll;