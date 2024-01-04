const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (key) {
        case value:
            
            break;
    
        default:
            console.log("No Error!");
            break;
    }
    res.json({
        message : err.message,
        stackTrace : err.stack
    })
}

module.exports = errorHandler;