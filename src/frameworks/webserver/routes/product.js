import productController from "../../../adapters/controllers/productController.js";
import categoryRepositoryInt from "../../../application/repositories/categoryRepositoryInt.js";
import productRepositoryInt from "../../../application/repositories/productRepositoryInt.js";
import categoryRepositoryImpl from "../../database/mongodb/repositories/categoryRepositoryImpl.js";
import productRepositoryImpl from "../../database/mongodb/repositories/productRepositoryImpl.js";


const productRouter = (express) => {
    const router = express.Router();

    const controller = productController(productRepositoryInt, productRepositoryImpl, categoryRepositoryInt, categoryRepositoryImpl);

    router.route('/')
        .get(controller.listProducts)
        .post(controller.createProduct)

    // router.route('/:id')
    //     .get(controller.viewProductById)
    //     .put(controller.updateProduct)
    //     .delete(controller.deleteProduct)

    return router;
}

export default productRouter;
