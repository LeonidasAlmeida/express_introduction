module.exports = app =>{
    return{
        findAll:(params,callback)=>{
            return callback([
                {title:'make buys'},
                {title:'fix pc'}
            ]);
        }
    };
};