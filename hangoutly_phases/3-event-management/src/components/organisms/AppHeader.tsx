import { Link } from 'react-router-dom';
import { Button } from '../atoms/Button';
import { useAuth } from '../../features/auth/services/useAuth';

export function AppHeader() {
  const { user, signOut } = useAuth();
  const displayName = (user?.user_metadata?.full_name as string | undefined)?.trim() || user?.email;

  return (
    <header
      style={{
        borderBottom: '1px solid #e2e8f0',
        background: '#ffffff',
      }}
    >
      <div
        style={{
          maxWidth: 960,
          margin: '0 auto',
          padding: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link to="/events" style={{ fontWeight: 800, letterSpacing: 0.2 }}>
          Hangoutly
        </Link>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Link to="/events">Events</Link>
          {user ? (
            <>
              <Link to="/events/new">Create event</Link>
              <span style={{ fontSize: 14 }}>{displayName}</span>
              <Button variant="secondary" onClick={() => void signOut()}>
                Log out
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
