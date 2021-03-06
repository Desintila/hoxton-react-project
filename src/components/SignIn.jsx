import { useNavigate } from "react-router-dom"

function SignIn({ setUser }) {

    const navigate = useNavigate()



    function signIn(email, password) {
        return fetch(`http://localhost:3000/users?q=${email}`)
            .then((resp) => resp.json())
            .then((userFromServer) => {
                if (userFromServer[0].password === password) {
                    setUser(userFromServer[0])
                    navigate('/home')
                }
                else {
                    alert('Wrong credentials.')
                }
            })
    }


    function handleOnSubmit(event) {
        event.preventDefault()
        signIn(event.target.email.value, event.target.password.value)
        event.target.reset()
    }




    return (
        <form className='signup-form' onSubmit={(event) => handleOnSubmit(event)}>
            <h2 className='title'>Login</h2>
            <label className='labels'>Email
                <input type="email" name="email" className='inputs' required />
            </label>
            <label className='labels'>
                Password
                <input type="password" name="password" className='inputs' required />
            </label>
            <input type="submit" name="submit-button" value="Sign In" className='submit' />
            <h3 className="link" onClick={() => navigate('/signup')}> Create an account</h3>
        </form>
    )
}
export default SignIn