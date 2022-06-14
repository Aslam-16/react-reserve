import { Link } from "react-router-dom"
import { connect } from "react-redux";
import { viewProfiles } from "../../actions/profileaction";
import { useEffect } from "react";
import Spinner from "./spinner";
import Moment from "react-moment";

const ViewProfile=({match,viewProfiles,profile:{loading,devprofile},auth})=>{

    useEffect(()=>{
        viewProfiles(match.params.id);
        console.log(auth);
    },[])

    // const {name,status,company,location}=profile?.devprofile;
    // const { facebook, twitter, instagram, linkedin, youtube } = profile?.devprofile?.social;

    return (
        <>
           {devprofile==null ||loading?<Spinner/>: <>
           
           <Link to="/developers" class="btn btn-light">Back To Profiles</Link>

                {auth.isauth && auth.token && devprofile.user?._id===auth.user?._id ?<Link to="/edit-profile" class="btn btn-light">Edit Profile</Link>:""}

            <div class="profile-grid my-1">
                {/* <!-- Top --> */}
                <div class="profile-top bg-primary p-2">
                    <img
                        class="round-img my-1"
                        src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d52?s=200"
                        alt=""
                    />
                    <h1 class="large">{devprofile.user?.name&& devprofile.user?.name}</h1>
                    <p class="lead">{devprofile.status} at {devprofile.company && devprofile.company}</p>
                        <p>{devprofile.location && devprofile.location}</p>
                    {devprofile.social ?<div class="icons my-1">
                           { devprofile.website?<a href={devprofile.website} target="_blank" rel="noopener noreferrer">
                            <i class="fas fa-globe fa-2x"></i>
                            </a> : ""}
                            {devprofile.social.twitter?<a href={devprofile.social.twitter} target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-twitter fa-2x"></i>
                        </a>:""}
                            {devprofile.social.facebook?<a href={devprofile.social.facebook} target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-facebook fa-2x"></i>
                        </a>:""}
                            {devprofile.social.linkedin?<a href={devprofile.social.linkedin} target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-linkedin fa-2x"></i>
                    </a>:""}
                            {devprofile.social.youtube?     <a href={devprofile.social.youtube} target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-youtube fa-2x"></i>
                        </a>:""}
                            {devprofile.social.instagram? <a href={devprofile.social.instagram} target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-instagram fa-2x"></i>
                        </a>:""}
                    </div>:""}
                </div>

                {/* <!-- About --> */}
                <div class="profile-about bg-light p-2">
                        <h2 class="text-primary">{devprofile.user?.name && devprofile.user?.name}'s Bio</h2>
                    <p>
                            {devprofile.bio && devprofile.bio}
                    </p>
                    <div class="line"></div>
                        {devprofile.skills.length !== 0 && <><h2 class="text-primary">Skill Set</h2>
                    <div class="skills">
                                {devprofile.skills.map((skill) => <div class="p-1"><i class="fa fa-check"></i>{skill}</div>)}
                    </div>
                    </>}
                </div>

                {/* <!-- Experience --> */}
                {devprofile.experience.length!==0 && <div class="profile-exp bg-white p-2">
                    <h2 class="text-primary">Experience</h2>
                        {devprofile.experience.map((exp)=><div>
                            <h3 class="text-dark">{exp.company && exp.company}</h3>
                            <p><Moment format="YYYY/MM/DD">
                                {exp.from && exp.from}
                            </Moment> - {exp.to != null ? <Moment format="YYYY/MM/DD">{exp.to && exp.to}</Moment> : 'Now'}</p>
                            <p><strong>Position: </strong>{exp.title && exp.title}</p>
                        <p>
                                <strong>Description: </strong>{exp.description && exp.description}
                        </p>
                    </div>)}
                    
                </div>}

                {/* <!-- Education --> */}
                    {devprofile.education.length !== 0 &&<div class="profile-edu bg-white p-2">
                    <h2 class="text-primary">Education</h2>
                        {devprofile.education.map((exp) => <div>
                        <h3>{exp.school}</h3>
                            <p> <Moment format="YYYY/MM/DD">
                                {exp.from && exp.from}
                            </Moment> - {exp.to != null ? <Moment format="YYYY/MM/DD">{exp.to && exp.to}</Moment> : 'Now'} </p>
                        <p><strong>Degree: </strong>{exp.degree}</p>
                        <p><strong>Field Of Study: </strong>{exp.fieldofstudy}</p>
                        <p>
                            <strong>Description: </strong>{exp.description}
                        </p>
                    </div>)}
                </div>}

                {/* <!-- Github --> */}
                {/* <div class="profile-github">
                    <h2 class="text-primary my-1">
                        <i class="fab fa-github"></i> Github Repos
                    </h2>
                    <div class="repo bg-white p-1 my-1">
                        <div>
                            <h4><a href="#" target="_blank"
                                rel="noopener noreferrer">Repo One</a></h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Repellat, laborum!
                            </p>
                        </div>
                        <div>
                            <ul>
                                <li class="badge badge-primary">Stars: 44</li>
                                <li class="badge badge-dark">Watchers: 21</li>
                                <li class="badge badge-light">Forks: 25</li>
                            </ul>
                        </div>
                    </div>
                    <div class="repo bg-white p-1 my-1">
                        <div>
                            <h4><a href="#" target="_blank"
                                rel="noopener noreferrer">Repo Two</a></h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Repellat, laborum!
                            </p>
                        </div>
                        <div>
                            <ul>
                                <li class="badge badge-primary">Stars: 44</li>
                                <li class="badge badge-dark">Watchers: 21</li>
                                <li class="badge badge-light">Forks: 25</li>
                            </ul>
                        </div>
                    </div>
                </div> */}
            </div>
            </>}
        </>
    )

}
const mapStateToProps=state=>({
    profile:state.profileReducer,
    auth:state.registerReducer
})
export default connect(mapStateToProps,{viewProfiles})(ViewProfile);