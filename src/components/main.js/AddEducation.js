import { useState } from "react";
import { Link,withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addEducation } from "../../actions/profileaction";
import Moment from 'react-moment'


const AddEducation = ({addEducation,history}) => {

    const [formData, setFormdata] = useState({
        school: "",
        degree: "",
        fieldofstudy: "",
        from: "",
        current: false,
        to: "",
        disableto: false,
        description: ""
    });
    const { school,
        degree,
        fieldofstudy,
        from,
        current,
        to,
        disableto,
        description
} = formData
    const [toggleto, settoggleto] = useState(false);
    const onChange = (e) => setFormdata({ ...formData, [e.target.name]: e.target.value })
    const onsubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        addEducation(formData,history);
    }
    return (
        <>
            <h1 classNameName="large text-primary">
                Add Your Education
            </h1>
            <p classNameName="lead">
                <i classNameName="fas fa-graduation-cap"></i> Add any school, bootcamp, etc that
                you have attended
            </p>
            <small>* = required field</small>
            <form classNameName="form">
                <div classNameName="form-group">
                    <input
                        type="text"
                        placeholder="* School or Bootcamp"
                        name="school"
                        value={school}
                        onChange={(e) => onChange(e)}
                        required
                    />
                </div>
                <div classNameName="form-group">
                    <input
                        type="text"
                        placeholder="* Degree or Certificate"
                        name="degree"
                        value={degree}
                        onChange={(e) => onChange(e)}
                        required
                    />
                </div>
                <div classNameName="form-group">
                    <input type="text" placeholder="Field Of Study" name="fieldofstudy" value={fieldofstudy}
                        onChange={(e) => onChange(e)} />
                </div>
                <div classNameName="form-group">
                    <h4>From Date</h4>
                    <input type="date" name="from" value={from}
                        onChange={(e) => onChange(e)} />
                </div>
                <div classNameName="form-group">
                    <p>
                        <input type="checkbox" name="current" value={current} onChange={(e) => {
                            setFormdata({ ...formData, current: !current });
                            settoggleto(!toggleto)
                        }} /> Current School or Bootcamp
                    </p>
                </div>
                <div classNameName="form-group">
                    <h4>To Date</h4>
                    <input type="date" name="to" value={to}
                        onChange={(e) => onChange(e)}  disabled={toggleto?'disabled':""}/>
                </div>
                <div classNameName="form-group">
                    <textarea
                        name="description"
                        cols="30"
                        rows="5"
                        placeholder="Program Description"
                        value={description}
                        onChange={(e) => onChange(e)}
                    ></textarea>
                </div>
                <input type="submit" classNameName="btn btn-primary my-1" onClick={(e) => onsubmit(e)} />
                <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link>

            </form>
        </>
    )
}

export default connect(null,{addEducation})(withRouter(AddEducation));  