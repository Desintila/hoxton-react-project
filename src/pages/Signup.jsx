import Register from '../components/Register'
import '../styles/Signup.css'
function SignUp({ users, setUsers }) {





    return (
        <main className='main'>
            <section className='register-section'>
                <Register users={users} setUsers={setUsers} />
            </section>
        </main>
    )
}
export default SignUp