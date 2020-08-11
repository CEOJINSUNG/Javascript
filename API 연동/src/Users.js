import React, {useState} from 'react';
//import axios from 'axios'; useContext로 대체됨
//import {useAsync} from 'react-async';
import User from './User';
import { useUsersState, useUsersDispatch, getUsers } from './UsersContext';

/*useAsync를 사용할 때 선언함 useContext로 대체됨
async function getUsers() {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/`)
    return response.data;
}*/

/*useReducer를 활용한 API 연동
function reducer(state, action) {
    switch (action.type){
        case 'LOADING':
            return {
                loading: true,
                data: null, 
                errar: null,
            };
        case 'SUCCESS':
            return {
                loading: false,
                data: action.data, 
                errar: null,
            };
        case 'ERROR':
            return {
                loading: false,
                data: null, 
                errar: action.error,
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}*/

function Users() {
    /*자체 useAsync를 사용할 때 선언 useContext로 대체됨
    const [state, refetch] = useAsync(getUsers, [], true);
    const {data: users, error, isLoading, reload, run} = useAsync({
        deferFn: getUsers
    });*/
    const [userId, setUserId] = useState(null);
    const state = useUsersState();
    const dispatcch = useUsersDispatch();

    const {loading, data:users, error} = state.users;
    const fetchData = () => {
        getUsers(dispatcch);
    }

    //자체 useAsyne를 사용할때 const { loading, data: users, error } = state;
    if(loading) return <div>로딩중..</div>
    if(error) return <div>에러가 발생했습니다</div>
    if(!users) return <div onClick = {fetchData}>불러오기</div>;

    //useReducer를 통한 API 연동
    /*const [state, dispatcch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: null,
    });
    const fetchUsers = async () => {
        dispatchEvent({type: 'LOADING'});
        try{
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/users/'
            );
            dispatcch({ type  : 'SUCCESS', data: response.data});
        } catch (e) {
            dispatcch({ type: 'ERROR', error: e});
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const {loading, data: users, error} = states

    if(loading) return <div>로딩중..</div>
    if(error) return <div>에러가 발생했습니다</div>
    if(!users) return null;*/


    //useState를 통한 함수구현
    /*const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    
    const fetchUsers = async () => {
        try{
            setUsers(null);
            setError(null);
            setLoading(null);
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/users/'
            );
            setUsers(response.data);
        } catch (e) {
            setError(e);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    if(loading) return <div>로딩중..</div>
    if(error) return <div>에러가 발생했습니다</div>
    if(!users) return null;*/

    return (
        <>
        <ul>
            {users.map(user => (
            <li key={user.id}> onClick={() => setUserId(user.id)}
                {user.username} ({user.name})
            </li>))}
        </ul>
        <button onClick={fetchData}>다시 불러오기</button>
        {userId && <User id={userId} />}
        </>
    );
}

export default Users;