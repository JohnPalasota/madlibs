import React from 'react';
import { Link } from 'react-router-dom'

export const AccountsList = props => {
    
    if (!props.accounts) {
        return <div>Loading...</div>
    }

    if (!props.accounts.length) {
        return <div className="alert alert-info">
            No records found.
        </div>
    }

    return <>
    <table className="table table-striped table-condensed">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Is Employee</th>
                <th>Department</th>
                <th>&nbsp;</th>
            </tr>
        </thead>
        <tbody>
    {
        //The e => props just stands for event.
        props.accounts.map(x => 
            <tr key={x.id}>
                <td><Link to={`/edit/` + x.id}>{x.name}</Link></td>
                <td>{x.email}</td>
                <td>{x.isEmployee ? 'Yes' : 'No'}</td>
                <td>{x.departmentId}</td>
                <td><button className="btn btn-sm btn-danger" onClick={ e => props.onDelete(x.id)}>Delete</button></td> 
            </tr>)                      
    }
        </tbody>
</table>

</>
}


