


const serverConfig = (app, config) => {
    const startServer = () => {
        app.listen(config.port, () => {
            console.log(`Server listening on Port ${config.port}`);
        });
    };
    return { startServer };
};

export default serverConfig;
