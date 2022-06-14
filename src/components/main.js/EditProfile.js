import { useEffect, useState } from "react";
import { createProfile, getProfile } from "../../actions/profileaction";
import { connect } from "react-redux";
import Spinner from "./spinner";
import { withRouter,Link } from "react-router-dom";


const EditProfile = ({ createProfile, history,getProfile,profile}) => {

    const [formData, setFormdata] = useState({
        status: "",
        name: "",
        company: "",
        website: "",
        location: "",
        skills: "",
        githubusername: "",
        bio: "",
        twitter: "",
        facebook: "",
        linkedin: "",
        youtube: "",
        instagram: "",
        hide: false
    })
    const { status,
        company,
        website,
        location,
        skills,
        githubusername,
        bio,
        twitter,
        facebook,
        linkedin,
        youtube,
        instagram,
        hide } = formData;
    useEffect(()=>{
        getProfile();
        const pr= profile.profile;
      !profile.loading &&  setFormdata({
          company:
        profile.loading || !pr.company ?"":pr.company,
        status:
            profile.loading || !pr.status ? "" : pr.status,
        website: 
            profile.loading || !pr.website ? "" : pr.website,
        location:
            profile.loading || !pr.location ? "" : pr.location,
        githubusername:
            profile.loading || !pr.githubusername ? "" : pr.githubusername,
        bio:
        profile.loading || !pr.bio ?"":pr.bio,
        skills:
            profile.loading || !pr.skills ? "" : pr.skills.join(","),
        facebook:
                profile.loading || !pr.social.facebook ? "" : pr.social.facebook,
        twitter:
                profile.loading || !pr.social?"" : pr.social.twitter,
        youtube:
                profile.loading || !pr.social?"" : pr.social.youtube,
        instagram:
                profile.loading || !pr.social? "" : pr.social.instagram,
        linkedin:
                profile.loading || !pr.social? "" : pr.social.linkedin 
        })
         
    },[!profile.loading])
    const change = () =>
        setFormdata({ ...formData, hide: !hide })

    const onchange = (e) => {
        console.log('hii');
        setFormdata({ ...formData, [e.target.name]: e.target.value })
    }

    const onsubmit = async (e) => {
        e.preventDefault();
        await createProfile(formData, history,true);
        console.log(formData)
    }


    return (
        profile.loading || profile.profile == null ? <Spinner/>:
        <section className="container">
            <h1 className="large text-primary">
                Create Your Profile
            </h1>
            <p className="lead">
                <i className="fas fa-user"></i> Let's get some information to make your
                profile stand out
            </p>
            <small>* = required field</small>
            <form className="form">
                <div className="form-group">
                    <select name="status" value={status} onChange={(e) => onchange(e)}>
                        <option value="0">* Select Professional Status</option>
                        <option value="Developer">Developer</option>
                        <option value="Junior Developer">Junior Developer</option>
                        <option value="Senior Developer">Senior Developer</option>
                        <option value="Manager">Manager</option>
                        <option value="Student or Learning">Student or Learning</option>
                        <option value="Instructor">Instructor or Teacher</option>
                        <option value="Intern">Intern</option>
                        <option value="Other">Other</option>
                    </select>
                    <small className="form-text"
                    >Give us an idea of where you are at in your career</small
                    >
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Company" name="company" value={company} onChange={(e) => onchange(e)} />
                    <small className="form-text"
                    >Could be your own company or one you work for</small
                    >
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Website" name="website" value={website} onChange={(e) => onchange(e)} />
                    <small className="form-text"
                    >Could be your own or a company website</small
                    >
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Location" name="location" value={location} onChange={(e) => onchange(e)} />
                    <small className="form-text"
                    >City & state suggested (eg. Boston, MA)</small
                    >
                </div>
                <div className="form-group">
                    <input type="text" placeholder="* Skills" name="skills" value={skills} onChange={(e) => onchange(e)} />
                    <small className="form-text"
                    >Please use comma separated values (eg.
                        HTML,CSS,JavaScript,PHP)</small
                    >
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Github Username"
                        name="githubusername"
                        value={githubusername} onChange={(e) => onchange(e)}
                    />
                    <small className="form-text"
                    >If you want your latest repos and a Github link, include your
                        username</small
                    >
                </div>
                <div className="form-group">
                    <textarea placeholder="A short bio of yourself" name="bio" value={bio} onChange={(e) => onchange(e)}></textarea>
                    <small className="form-text">Tell us a little about yourself</small>
                </div>

                <div className="my-2">
                    <button type="button" className="btn btn-light" onClick={() => change()}>
                        Add Social Network Links
                    </button>
                    <span>Optional</span>
                </div>
                {hide && <>
                    <div className="form-group social-input">
                        <i className="fab fa-twitter fa-2x"></i>
                        <input type="text" placeholder="Twitter URL" name="twitter" value={twitter} onChange={(e) => onchange(e)} />
                    </div>

                    <div className="form-group social-input">
                        <i className="fab fa-facebook fa-2x"></i>
                        <input type="text" placeholder="Facebook URL" name="facebook" value={facebook} onChange={(e) => onchange(e)} />
                    </div>

                    <div className="form-group social-input">
                        <i className="fab fa-youtube fa-2x"></i>
                        <input type="text" placeholder="YouTube URL" name="youtube" value={youtube} onChange={(e) => onchange(e)} />
                    </div>

                    <div className="form-group social-input">
                        <i className="fab fa-linkedin fa-2x"></i>
                        <input type="text" placeholder="Linkedin URL" name="linkedin" value={linkedin} onChange={(e) => onchange(e)} />
                    </div>

                    <div className="form-group social-input">
                        <i className="fab fa-instagram fa-2x"></i>
                        <input type="text" placeholder="Instagram URL" name="instagram" value={instagram} onChange={(e) => onchange(e)} />
                    </div></>}
                <input type="submit" className="btn btn-primary my-1" onClick={(e) => onsubmit(e)} />
                <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link>
            </form>
        </section>
    )
}

const mapStateToProps=(state)=>({
    profile:state.profileReducer
})
export default connect(mapStateToProps, { createProfile,getProfile })(withRouter(EditProfile));