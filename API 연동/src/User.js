import React, {useEffect} from 'react';
import { useUsersState, useUsersDispatch, getUser } from './UsersContext';
//import axios from 'axios'; useContext로 대체됨
//import {useAsync} from 'react-async'; useContext로 대체됨

/* useContext로 대체됨
async function getUser({id}) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.data;
}
*/

function User({id}) {
    /* useContext로 대체됨
    const { 
        data: user,
        error,
        isLoading
    } = useAsync({
        promiseFn: getUser,
        id,
        watch: id,
    });
    */

    //자체적으로 만든 useAsync 사용법
    /*const [state] = useAsync (() => getUser(id), [id]);
    const {loading, data:user, error} = state;*/

    const state = useUsersState();
    const dispatcch = useUsersDispatch();

    useEffect(() => {
        getUser(dispatcch, id);
    }, [dispatcch, id]);

    const {loading, data:users, error} = state.user;
    /* useContext로 대체됨
    const fetchData = () => {
        getUsers(dispatcch);
    }
    */

    if(loading) return <div>로딩중..</div>
    if(error) return <div>에러가 발생했습니다</div>
    if(!users) return null;

    return <div>
        <h2>{user.username}</h2>
        <p>
            <b>Email: </b> {user.email}
        </p>
    </div>
}