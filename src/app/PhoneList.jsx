import React from 'react';

export const PhoneList = props => <>
                    <ul className="list-group">
                    <li className="list-group-item bg-info">Phone numbers</li>
                    {
                        props.phoneNumbers.map((x, i) => 
                        <li key={i} className= "list-group-item">
                            { x.number }
                            <span className="badge badge-info float-right">
                                { x.type }
                            </span>
                        </li>)
                    }
                </ul>

</>