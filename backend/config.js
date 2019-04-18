const config = {
    salt: Buffer.from(process.env['SALT'] || "6db4108b61f8bb1907b7037fc2750c5f", "hex"),
    secretCode: process.env['SECRET_CODE'] || "404 project",
    mongo: {
        uri: 'mongodb+srv://testuser:project-404@blablatutor-xljo0.mongodb.net/test?retryWrites=true',
        debug: true
    },
    logging: {
        logErrors: true,
        format: 'dev'
    }
};

if(process.env['NODE_ENV'] === 'production') {
    config.mongo.uri = 'mongodb://localhost/tutor-db';
    config.mongo.debug = false;
    config.logging.logErrors = false;
    config.logging.format = 'tiny';
}

module.exports = config;
