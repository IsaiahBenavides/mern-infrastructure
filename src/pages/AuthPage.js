import SignUpForm from "../components/SignUpForm"

export default function AuthPage(setUser) {
    return (
        <main>
            <h1>Authorization Page</h1>
            <SignUpForm setUser={setUser}/>
        </main>
    )
}