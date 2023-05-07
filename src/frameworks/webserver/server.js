


const serverConfig = (server, config) => {
    const startServer = () => {
        server.listen(config.port, () => {
            console.log(`Server listening on Port ${config.port}`);
        });
    };

    return { startServer };

};

export default serverConfig;
