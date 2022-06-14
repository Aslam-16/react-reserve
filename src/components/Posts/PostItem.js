import { useEffect, useState } from "react"
import Moment from "react-moment";
import { connect } from "react-redux";
import { onePost,delCmt } from "../../actions/postaction";
import Spinner from "../main.js/spinner";
import Post from "./Post";

const PostItem=({post,onePost,match,auth,delCmt})=>{

    useEffect(()=>{
        console.log(typeof match.params.id);
        onePost(match.params.id)
    },[])

    const onDelete = (id,cid) => {
        delCmt(id,cid)
    }
    return (
        <>
      { post.loading || post.post==null ? <Spinner/> : <div className='posts'>

            <div className="post bg-white p-1 my-1">
                <div>
                    <a href="profile.html">
                        <img
                            className="round-img"
                            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d5?s=200"
                            alt=""
                        />
                        <h4>{post?.post?.name}</h4>
                    </a>
                </div>
                <div>
                    <p className="my-1">
                        {post?.post?.text}
                    </p>
                    <p className="post-date">
                        Posted on {<Moment format="YYYY/MM/DD">
                            {post?.post?.date}
                        </Moment>}
                    </p>
                    
                </div>
            </div>
        </div>}
        <Post comment={true} id={match.params.id}/> 
            {post.post?.comments.length===0? <h1>No Comments! Simply Waste</h1>: post.post?.comments?.map((cmt)=> <div className='posts'>

                <div className="post bg-white p-1 my-1">
                    <div>
                        <a href="profile.html">
                            <img
                                className="round-img"
                                src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d5?s=200"
                                alt=""
                            />
                            <h4>{cmt.name}</h4>
                        </a>
                    </div>
                    <div>
                        <p className="my-1">
                            {cmt.text}
                        </p>
                        <p className="post-date">
                            Posted on {<Moment format="YYYY/MM/DD">
                                {cmt.date}
                            </Moment>}
                        </p>
                       
                        {cmt.user === auth?.user?._id && <button
                            type="button"
                            className="btn btn-danger"
                            onClick={(e) => onDelete(post.post._id,cmt._id)}
                        >
                            <i className="fas fa-times"></i>
                        </button>}
                    </div>
                </div>
            </div>)}
        </>
    )
}

const mapStateToProps=(state)=>({
    post:state.postReducer,
    auth: state.registerReducer
})
export default connect(mapStateToProps, {onePost,delCmt})(PostItem)