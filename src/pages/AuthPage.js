import SignUpForm from "../components/SignUpForm";
import LoginForm from "../components/LogInForm";

export default function AuthPage(setUser) {
  return (
    <main>
      <h1>Authorization Page</h1>
      <SignUpForm setUser={setUser} />
      <LoginForm setUser={setUser} />
    </main>
  );
}
