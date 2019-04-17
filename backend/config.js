const config = {
    salt: Buffer.from(process.env['SALT'] || "6db4108b61f8bb1907b7037fc2750c5f", "hex"),
    secretCode: process.env['SECRET_CODE'] || "404 project"
};

module.exports = config;
