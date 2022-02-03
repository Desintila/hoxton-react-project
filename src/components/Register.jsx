import { useNavigate } from "react-router-dom"

function Register({ users, setUsers }) {
    const navigate = useNavigate()

    function register(event) {
        event.preventDefault()

        return fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: event.target.firstname.value,
                lastName: event.target.lastname.value,
                email: event.target.email.value,
                password: event.target.password.value,
                avatar: `https://avatars.dicebear.com/api/avataaars/${event.target.firstname.value}${event.target.lastname.value}.svg`,
                library: []
            })
        }).then(resp => resp.json())
            .then(user => {
                const copy = JSON.parse(JSON.stringify(users))
                copy.push(user)
                setUsers(copy)
                event.target.reset()
            })

    }


    return (
        <form className='signup-form' onSubmit={(event) => {
            register(event)
            navigate('/login')
        }} >
            <h2 className='title'>Sign Up</h2>
            <label className='labels'>First Name
                <input type="text" name="firstname" className='inputs' required />
            </label>
            <label className='labels'>Last Name
                <input type="text" name="lastname" className='inputs' required />
            </label>
            <label className='labels'>Email
                <input type="email" name="email" className='inputs' required />
            </label>
            <label className='labels'>
                Password
                <input type="password" name="password" className='inputs' required />
            </label>
            <input type="submit" name="submit-button" value="Sign Up" className='submit' />
        </form>
    )
}

export default Register