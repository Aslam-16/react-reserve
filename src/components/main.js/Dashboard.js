import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getProfile,deleteEducation,deleteExperience,deleteProfile } from "../../actions/profileaction";
import { getUser } from "../../actions/registeraction";
import { store } from "../..";
import Spinner from "./spinner";
import ListEducation from "./ListEducation";
import ListExperience from "./ListExperience";
import Moment from "react-moment";


const Dashboard=({getProfile,getUser,profile,user,deleteEducation,deleteExperience,deleteProfile})=>{
   
    useEffect(() => {
        getProfile();
    }, [getProfile])
    const deleteEdu=(id)=>deleteEducation(id)
    const deleteExp = (id) => deleteExperience(id)
    const profileDelete = () => {
        if(window.confirm('Are you sure?'))
        deleteProfile();}
    const list_Edu = !profile.loading && profile.profile && profile.profile.education.map(data => 
        <tr key={data._id}>
            <td>{data.school}</td>
            <td className="hide-sm">{data.degree}</td>
            <td className="hide-sm">{data.fieldofstudy}</td>
            <td className="hide-sm">
                <Moment format="YYYY/MM/DD">
                    {data.from}
                </Moment> - {data.to != null ? <Moment format="YYYY/MM/DD">{data.to}</Moment> : "Now"}  
            </td>
            <td><button className="btn btn-danger" onClick={()=>deleteEdu(data._id)}>
                Delete
            </button></td>
        </tr>
        )
    const list_Exp = !profile.loading && profile.profile && profile.profile.experience.map(data =>
        <tr key={data._id}>
            
            <td>{data.title}</td>
            <td className="hide-sm">{data.company}</td>
            <td className="hide-sm">{data.location}</td>
            <td className="hide-sm">
                <Moment format="YYYY/MM/DD">
                    {data.from}
                </Moment> - {data.to != null ? <Moment format="YYYY/MM/DD">{data.to}</Moment> :'Now'  }            
            </td>
            <td><button className="btn btn-danger" onClick={() => deleteExp(data._id)}>
                Delete
            </button></td>
        </tr>
    )
 return(profile.loading ? <Spinner/>:
 <div>
         <h1 className="large text-primary">
             Dashboard
         </h1>
         <p className="lead"><i className="fas fa-user"></i> Welcome {user && user.name }</p> 
         {profile.loading? <Spinner/>: profile.profile == null ? <Link to='/create-profile'><input type="submit" className="btn btn-primary" value="Create Profile" /></Link>:
            <> <div className="dash-buttons">
                 <Link to="/edit-profile" className="btn btn-light"
                 ><i className="fas fa-user-circle text-primary"></i> Edit Profile</Link>
                 <Link to="/add-experience" className="btn btn-light"
                 ><i className="fab fa-black-tie text-primary"></i> Add Experience</Link>
                 <Link to="/add-education" className="btn btn-light"
                 ><i className="fas fa-graduation-cap text-primary"></i> Add Education</Link>
             </div> 
                 {profile.profile.education.length!==0 && <ListEducation list_Edu={list_Edu}/>}
                 {profile.profile.experience.length !==0 && <ListExperience list_Exp={list_Exp}/>}
                 <div className="my-2">
                     <button className="btn btn-danger" onClick={() => profileDelete()}>
                         <i className="fas fa-user-minus"></i>

                         Delete My Account
                     </button>
                 </div>
             </>} 
        
    </div>
)
}

const mapStateToProps=(state)=>({
    profile:state.profileReducer,
    user:state.registerReducer.user
})

export default connect(mapStateToProps,{getProfile,getUser,deleteEducation,deleteExperience,deleteProfile})(Dashboard);