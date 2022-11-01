import React, { useEffect, useState } from 'react'
import { Loading } from './Loading.js';

export const ConsumeApiComponent = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);


    const getUsers = async () => {
        try {
            const response = await fetch('https:api.github.com/users');

            const data = await response.json();
            console.log(data);
            setUsers(data);

            setLoading(false);
        } catch (error) {
            console.log("MY error is : " + error);
        }
    }

    useEffect(() => {
        getUsers();
    }, [])



    if (loading) {
        return <Loading />
    }

    return (
        <div className=''>
            <h1 className='display-4 text-light text-center'>
                List of Github users
            </h1>
            <div className='container-fluid mt-3 mb-3'>
                <div className='row text-center'>
                    <hr className='text-white' />
                    {
                        users.map(user => {
                            return (
                                <div key={user.id} className='col-10 col-md-4 mt-3 mb-3'>
                                    <div className='card p-2'>
                                        <div className='d-flex align-items-center'>
                                            <div className='image'>
                                                <img src={user.avatar_url} className='rounded' width='150' />
                                            </div>
                                            <div className='ml-3 w-100'>
                                                <h4 className='mv-0 mt-0 textLeft'>{user.login}</h4><span className='textLeft'>{user.node_id}</span>
                                                <div className='p-2 mt-2 ms-2 bg-secondary d-flex justify-content-between rounded text-white stats'>
                                                    <div className='d-flex flex-column'>
                                                        <span className='articles'>Articlas</span>
                                                        <span className='number1'>38</span>
                                                    </div>
                                                    <div className='d-flex flex-column'>
                                                        <span className='followers'>Followers</span>
                                                        <span className='number2'>980</span>
                                                    </div>
                                                    <div className='d-flex flex-column'>
                                                        <span className='rating'>Rating</span>
                                                        <span className='number3'>9.8</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>

        </div>
    )
}
