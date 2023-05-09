
import { categoryRouter, productRouter } from './index.js';

export const routes = (app, express) => {
    app.use('/api/v1/product', productRouter(express));
    app.use('/api/v1/category', categoryRouter(express));
   
    app.get('/', (req, res) => {
        res.send('This is the router home🏡🏡🏡🏡 page');
    });
}
export default routes

