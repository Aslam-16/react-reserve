const ListExperience = ({ list_Exp }) => {


    return (
        <>
            <h2 className="my-2">Experience Credentials</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th className="hide-sm">Company</th>
                        <th className="hide-sm">Location</th>
                        <th className="hide-sm">Years</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {list_Exp}
                </tbody>
            </table>
        </>
    )
}

export default ListExperience;