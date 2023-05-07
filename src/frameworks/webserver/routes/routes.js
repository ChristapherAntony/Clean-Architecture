


export const routes = (app, express) => {
    
    app.get('/', (req, res) => {
        res.send('This is the router page');
    });

}

export default routes

