const errorhandler = (req, res , next ,err) => {

    const statusC = res.statusCode ? res.statusCode : 500
    
    res.status(statusC)
    res.json({
        message : err.message ,
        stack : process.env.Node_env === 'Production' ? null : err.stack
    })

}



module.exports = {errorhandler}