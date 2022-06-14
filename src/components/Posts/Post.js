import { useState } from "react";
import { connect } from "react-redux";
import { addPost,addCmt } from "../../actions/postaction";

const AddPost=({addPost,comment,id,addCmt})=>{

    const [texts,settext]=useState({
        text:""
    })
    const {text}=texts;

    const onSubmit=(e)=>{
        e.preventDefault();
        if(text===""){
            alert("Need a Write Up!!!")
        }
        else{
            if(comment){
                console.log(typeof id);
                addCmt(texts,id)
                console.log('cmt');
            }
            else{
                console.log('post');

        addPost(texts);
            }
        }

    }
    return (
        <>
            <h1 className="large text-primary">
                {comment?'Comments':'Posts'}
            </h1>
            <p className="lead"><i className="fas fa-user"></i> Welcome to the community!</p>

            <div className="post-form">
                <div className="bg-primary p">
                    <h3>Say Something...</h3>
                </div>
                <form className="form my-1">
                    <textarea
                        name="text"
                        cols="30"
                        rows="5"
                        placeholder={comment ? "Write a Comment" : "Create a post"}
                        value={text}
                        onChange={(e)=>settext({...texts,text:e.target.value})}
                        required
                    ></textarea>
                    <input type="submit" className="btn btn-dark my-1" value="Submit" onClick={(e)=>onSubmit(e)} />
                </form>
            </div>
        </>
    )
}

export default connect(null,{addPost,addCmt})(AddPost);