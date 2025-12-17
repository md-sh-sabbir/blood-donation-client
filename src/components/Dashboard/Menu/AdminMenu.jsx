import React from 'react';
import { BiDonateBlood } from 'react-icons/bi';
import { FaUsers } from "react-icons/fa";
import MenuItem from '../../Shared/Menu/MenuItem';

const AdminMenu = () => {
    return (
        <div>
            <MenuItem icon={FaUsers}
                label='All Users'
                address='/dashboard/all-users'
            ></MenuItem>
            <MenuItem icon={BiDonateBlood}
                label='All Donation Requests'
                address='/all-donation-requests'
            ></MenuItem>
        </div>
    );
};

export default AdminMenu;