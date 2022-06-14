import AddPost from './Post';
import { connect } from 'react-redux';
import { getPosts,addLike,removeLike,deletePost} from '../../actions/postaction';
import { useEffect, useState } from 'react';
import Spinner from '../main.js/spinner';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const Posts=({getPosts,addLike,postses:{posts,loading},auth,removeLike,deletePost})=>{
// const [like,setLike]=useState(false)
// const [data,setData]=useState([])


    useEffect(()=>{
         getPosts();
        console.log(posts);
       

        
     
    },[getPosts]);
   

    const onLike=(e,id)=>{
        e.preventDefault();
        addLike(id)
    }
    const onDisLike = (e, id) => {
        e.preventDefault();
        removeLike(id)
    }
    const onDelete = (id) => {
        deletePost(id);
    }
    
    return (
        <>
        <AddPost/>
       
            {auth?.user && loading  ? <Spinner /> : posts.length===0?<h1>No Post Found!</h1>:posts.map((post)=><div className='posts'>

            <div className="post bg-white p-1 my-1">
                <div>
                    <a href="profile.html">
                        <img
                            className="round-img"
                            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d5?s=200"
                            alt=""
                        />
                        <h4>{post.name}</h4>
                    </a>
                </div>
                <div>
                    <p className="my-1">
                        {post.text}
                    </p>
                    <p className="post-date">
                            Posted on {<Moment format="YYYY/MM/DD">
                                {post.date}
                            </Moment>          }
                    </p>
                    <button type="button" className="btn btn-light" onClick={(e)=>onLike(e,post._id)}>
                            {post.likes.filter(id=> id.user.toString()===auth?.user?._id).length>0  ?<i className="fas fa-thumbs-up like"></i> :<i className="fas fa-thumbs-up"></i>} 
                           
                        <span>{post.likes.length>0 ?post.likes.length:""}</span>
                    </button>
                        <button type="button" className="btn btn-light" onClick={(e) => onDisLike(e, post._id)}>
                        <i className="fas fa-thumbs-down"></i>
                    </button>
                    <Link to={`/posts/${post._id}`} className="btn btn-primary">
                            Discussion <span className='comment-count'>{post.comments.length}</span>
                    </Link>
                        {post.user === auth?.user?._id && <button
                        type="button"
                        className="btn btn-danger"
                            onClick={(e) => onDelete( post._id)}
                    >
                        <i className="fas fa-times"></i>
                    </button>}
                </div>
            </div>
            </div>
            )}
        </>
            )
    
}

const mapStateToProps=state=>({
    postses:state.postReducer,
    auth: state.registerReducer
})
export default connect(mapStateToProps,{getPosts,addLike,removeLike,deletePost})(Posts);