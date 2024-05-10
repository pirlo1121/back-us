const postModel = require( '../model/post.model' );

async function registerPost( post ) {
    return await postModel.create( post );
}

async function getAllPosts() {
    return await postModel.find();
}

async function getOnePostById( id ) {
    return await postModel.findById( id );
    //return await ProductModel.find({ _id: id });
}

async function removeOnePostById( id ) {
    return await postModel.findByIdAndDelete({ _id: id });
}


module.exports = {
    registerPost, 
    getAllPosts, 
    getOnePostById,
    removeOnePostById
}