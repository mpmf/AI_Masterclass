import { useNavigate } from 'react-router-dom';
import { AuthForm } from '../components/AuthForm';
import { AuthNotice } from '../../../components/molecules/AuthNotice';
import * as authService from '../services/authService';

export function SignupPage() {
  const navigate = useNavigate();

  async function handleSignup({
    email,
    password,
    fullName,
  }: {
    email: string;
    password: string;
    fullName?: string;
  }) {
    await authService.signUp(email, password, fullName ?? '');
    navigate('/');
  }

  return (
    <div>
      <AuthForm
        title="Create account"
        submitLabel="Create account"
        showNameField
        onSubmit={handleSignup}
      />
      <AuthNotice mode="signup" />
    </div>
  );
}
