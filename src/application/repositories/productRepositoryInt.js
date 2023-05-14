const productRepositoryInt = (repository) => {

    const findAllProducts = () => repository.viewAllProducts();

    const findProductById = (id) => repository.viewProductById(id);

    const findProductByName = (name) => repository.findProductByName(name);

    const addNewProduct = (title, price, category) =>
        repository.addNewProduct(title, price, category);

    const updateProductById = (id, title, price, category) =>
        repository.updateProductById(id, title, price, category);

    const deleteProductById = (id) => repository.deleteProductById(id);

    return { findAllProducts, findProductById, addNewProduct, updateProductById, deleteProductById ,findProductByName};
};

export default productRepositoryInt;
