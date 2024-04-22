const { registerPost, getAllPosts, removeOnePostById } = require("../service/post.service");



const createPost = async (req, res) =>{
    const inputData = req.body;

    console.log(`data > ${data}`);

    try {
        const data = await registerPost( inputData );
        res.status( 201 ).json({ok: true, data})
        
    } catch (error) {
        console.error( error );
        res.status( 500 ).json({
            ok: false,
            msg: 'Error al crear publicacion'
        })
        
    }

}

const getPosts = async (req,res)=>{
    try {
        const data = await getAllPosts();
        res.status( 201 ).json({ok: true, data})
        
    } catch (error) {
        console.error( error );
        res.status( 500 ).json({
            ok: false,
            msg: 'Error al obtener todos las publicaciones'
        })  
    }
}
 
const removePost = async (req, res) =>{
    const post_id = req.params.id;
    try {
        const data = await removeOnePostById( post_id );
        res.status( 204 ).json({ok: true, data})
        
    } catch (error) {
        console.error( error );
        res.status( 500 ).json({
            ok: false,
            msg: 'Error al eliminar un producto por ID'
        })
    }
}
module.exports = {
    createPost,
    removePost,
    getPosts
}