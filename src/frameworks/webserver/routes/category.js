import categoryController from "../../../adapters/controllers/categoryController.js";
import categoryRepositoryInt from "../../../application/repositories/categoryRepositoryInt.js";
import categoryRepositoryImpl from "../../database/mongodb/repositories/categoryRepositoryImpl.js";
import { ERROR } from "../middleware/HttpError.js";




const categoryRouter = (express) => {
    const router = express.Router();

    const controller = categoryController(categoryRepositoryInt, categoryRepositoryImpl,ERROR)



    router.route('/') // category api end point
        .get(controller.viewAllCategories)
        .post(controller.AddNewCategory)


    router.route('/:id') // category api end point
        .put(controller.UpdateCategory)
        .delete(controller.deleteCategory)



    return router
}

export default categoryRouter;