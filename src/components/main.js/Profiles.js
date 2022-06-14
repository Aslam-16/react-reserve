import { connect } from "react-redux";
import { allProfiles } from "../../actions/profileaction";
import { useEffect } from "react";
import Spinner from "./spinner";
import { Link } from "react-router-dom";

const Profiles=({allProfiles,allprofile})=>{
    useEffect(()=>{
        allProfiles();
        

    }, [allProfiles])

    return (
        <>
            <h1 className="large text-primary">Developers</h1>
            <p className="lead">
                <i className="fab fa-connectdevelop"></i> Browse and connect with developers
            </p>
          { allprofile.profiles==null || allprofile.loading ? <Spinner/> :allprofile.profiles.map((data)=><div className="profiles">
                <div className="profile bg-light">
                    <img
                        className="round-img"
                        src={`https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d5${data.sklls?.length}?s=200`}
                        alt=""
                    />
                    <div>
                        <h2>{ data.user?.name}</h2>
                        <p>{data.status} at {data.company&& data.company}</p>
                        <p>Seattle, WA</p>
                    <Link to={`/profile/${data._id}`} className="btn btn-primary">View Profile</Link>
                    </div>

                    <ul>
                      {data.skills && data.skills.map((skill) => <li className="text-primary">
                            <i className="fas fa-check"></i>{skill}
                        </li>)}
                    </ul>
                </div>
                </div>)
}
        </>
    )
}

const mapStateToProps=(state)=>({
    allprofile:state.profileReducer
})
export default connect(mapStateToProps,{allProfiles})(Profiles);