import { Link } from 'react-router-dom';

export function AuthNotice({ mode }: { mode: 'login' | 'signup' }) {
  return mode === 'login' ? (
    <p style={{ fontSize: 14 }}>
      Need an account? <Link to="/signup">Create one</Link>
    </p>
  ) : (
    <p style={{ fontSize: 14 }}>
      Already have an account? <Link to="/login">Log in</Link>
    </p>
  );
}
