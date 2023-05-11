

const productRouter = (express) => {
    const router = express.Router();

    router.get('/', (req, res) => {
        res.send('This is the product router ✳️✳️✳️✳️ page');
    });



    return router
}

export default productRouter;