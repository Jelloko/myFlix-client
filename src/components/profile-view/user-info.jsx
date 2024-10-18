import React from 'react';
import PropTypes from "prop-types";



export const UserInfo = ({ Email, Name }) => {
    return (
        <>
            <h2> Account Information</h2>
            <p>Username: {Name}</p>
            <p>Email: {Email}</p>
        </>
    );
};

UserInfo.prototype = {
    Name: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired
};