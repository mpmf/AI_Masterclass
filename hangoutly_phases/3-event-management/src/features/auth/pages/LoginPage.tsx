import { useLocation, useNavigate } from 'react-router-dom';
import { AuthForm } from '../components/AuthForm';
import { AuthNotice } from '../../../components/molecules/AuthNotice';
import * as authService from '../services/authService';

type RedirectState = {
  from?: { pathname?: string };
};

export function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();

  async function handleLogin({
    email,
    password,
  }: {
    email: string;
    password: string;
    fullName?: string;
  }) {
    await authService.signIn(email, password);
    const state = location.state as RedirectState | null;
    const target = state?.from?.pathname ?? '/';
    navigate(target, { replace: true });
  }

  return (
    <div>
      <AuthForm title="Log in" submitLabel="Log in" onSubmit={handleLogin} />
      <AuthNotice mode="login" />
    </div>
  );
}
