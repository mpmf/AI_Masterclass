import { Link } from 'react-router-dom';
import { Button } from '../../../components/atoms/Button';
import { useAuth } from '../../auth/services/useAuth';

export function HomePage() {
  const { user, isLoading } = useAuth();
  const displayName = (user?.user_metadata?.full_name as string | undefined)?.trim() || user?.email;

  return (
    <section className="card stack">
      <h1 style={{ margin: 0 }}>Sprint 1 in Progress</h1>
      <p style={{ margin: 0 }}>
        Auth, schema, and policy foundations are now scaffolded for Hangoutly.
      </p>
      {isLoading ? <p style={{ margin: 0 }}>Loading session...</p> : null}
      {user ? (
        <p style={{ margin: 0 }}>You are signed in as {displayName}.</p>
      ) : (
        <div style={{ display: 'flex', gap: 8 }}>
          <Link to="/login">
            <Button>Log in</Button>
          </Link>
          <Link to="/signup">
            <Button variant="secondary">Sign up</Button>
          </Link>
        </div>
      )}
    </section>
  );
}
