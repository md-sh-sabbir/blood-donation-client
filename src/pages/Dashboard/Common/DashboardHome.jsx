import React, { use } from 'react';
import { AuthContext } from '../../../providers/AuthContext';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../../../hooks/useAxios';
import { Link } from 'react-router';

const DashboardHome = () => {

    const { user } = use(AuthContext)
    console.log(user);

    const axiosSecure = useAxios()

    const { data: requests, isLoading, error } = useQuery({
        queryKey: ["all-donation-requests"],
        queryFn: async () => {
            const res = await axiosSecure.get("/featured-requests");
            console.log(res.data);
            return res.data;
        },
    });

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-[#EA1241] mx-auto mb-4"></div>
                    <p className="text-xl text-gray-600">Loading donation requests...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <p className="text-xl text-red-600">Error loading donation requests</p>
                    <p className="text-gray-600 mt-2">{error.message}</p>
                </div>
            </div>
        );
    }

    const getStatusBadge = (status) => {
        const statusColors = {
            pending: 'bg-yellow-100 text-yellow-800 border-yellow-300',
            inprogress: 'bg-blue-100 text-blue-800 border-blue-300',
            done: 'bg-green-100 text-green-800 border-green-300',
            canceled: 'bg-red-100 text-red-800 border-red-300',
        };

        return (
            <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${statusColors[status] || 'bg-gray-100 text-gray-800'}`}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
        );
    };



    return (
        <div>
            <div className='my-10'>
                <h1 className='text-5xl font-bold text-center'><span className='text-red-500'>Welcome</span> {user?.displayName}</h1>

                <div className="overflow-x-auto mt-10">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>SL No.</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Hospital Name</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Blood Group</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Date & Time</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                requests.map((req, index) => <tr>
                                    <th>{index + 1}</th>
                                    <td>{req.recipientName}</td>
                                    <td>{req.fullAddress}, {req.recipientUpazila}, {req.recipientDistrict}</td>
                                    <td>{req.hospitalName}</td>
                                    <td className="px-6 py-4">
                                        <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-semibold">
                                            {req.bloodGroup}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">
                                        <div>{req.donationDate}</div>
                                        <div className="text-xs text-gray-500">{req.donationTime}</div>
                                    </td>
                                    <td className="px-6 py-4">{getStatusBadge(req.donationStatus)}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>


            <div className='text-center'>
                <Link to={'/all-donation-requests'} className='btn bg-blue-100 text-blue-700'>View my all requests</Link>
            </div>
        </div>
    );
};

export default DashboardHome;