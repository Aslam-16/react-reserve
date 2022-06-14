import { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addExperience } from "../../actions/profileaction";



const AddExperience = ({ addExperience, history }) => {

    const [formData, setFormdata] = useState({
        title: "",
        company: "",
        location: "",
        from: "",
        current: false,
        to: "",
        description: ""
    });
    const { title,
        company,
        location,
        from,
        current,
        to,
        description
    } = formData
    const [toggleto, settoggleto] = useState(false);
    const onChange = (e) => setFormdata({ ...formData, [e.target.name]: e.target.value })
    const onsubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        addExperience(formData, history);
    }
    return (
        <>
            <h1 className="large text-primary">
                Add An Experience
            </h1>
            <p className="lead">
                <i className="fas fa-graduation-cap"></i>  Add any developer/programming
                positions that you have had in the past
            </p>
            <small>* = required field</small>
            <form className="form">
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="* Job Title" name="title"
                        value={title}
                        onChange={(e) => onChange(e)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="* Company" name="company"
                        value={company}
                        onChange={(e) => onChange(e)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Location" name="location" value={location}
                        onChange={(e) => onChange(e)} />
                </div>
                <div className="form-group">
                    <h4>From Date</h4>
                    <input type="date" name="from" value={from}
                        onChange={(e) => onChange(e)} />
                </div>
                <div className="form-group">
                    <p>
                        <input type="checkbox" name="current" value={current} onChange={(e) => {
                            setFormdata({ ...formData, current: !current });
                            settoggleto(!toggleto)
                        }} /> Current School or Bootcamp
                    </p>
                </div>
                <div className="form-group">
                    <h4>To Date</h4>
                    <input type="date" name="to" value={to}
                        onChange={(e) => onChange(e)} disabled={toggleto ? 'disabled' : ""} />
                </div>
                <div className="form-group">
                    <textarea
                        name="description"
                        cols="30"
                        rows="5"
                        placeholder="Program Description"
                        value={description}
                        onChange={(e) => onChange(e)}
                    ></textarea>
                </div>
                <input type="submit" className="btn btn-primary my-1" onClick={(e) => onsubmit(e)} />
                <Link classNameName="btn btn-light my-1" to="/dashboard">Go Back</Link>

            </form>
        </>
    )
}

export default connect(null, { addExperience })(withRouter(AddExperience));  