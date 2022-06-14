const ListEducation=({list_Edu})=>{
   
    
    return (
        <>
            <h2 className="my-2">Education Credentials</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>School</th>
                        <th className="hide-sm">Degree</th>
                        <th className="hide-sm">Field of Study</th>
                        <th className="hide-sm">Years</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                   {list_Edu}
                </tbody>
            </table>
            </>
    )
}

export default ListEducation;