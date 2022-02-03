import SignIn from "../components/SignIn"
import '../styles/Signup.css'

function Login({ setUser }) {

    return (
        <main className='main'>
            <section className='register-section'>
                <SignIn setUser={setUser} />
            </section>
        </main>
    )
}
export default Login