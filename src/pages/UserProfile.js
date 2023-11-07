import NavBar from '../components/NavBar';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function UserProfile() {
    const [user, setUser] = useState({});
    const params = useParams()
    //console.log(params);
    const userId = params.id;

    useEffect(() => {
        fetch(`http://localhost:4000/users/${userId}`)
        .then(resp => resp.json())
        .then(data => setUser(data))
        .catch(error => console.error(error));
    }, [userId])

    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <h1>{user.name ? user.name : 'Loading...'}</h1>
            </main>
        </>
    );
}

export default UserProfile;