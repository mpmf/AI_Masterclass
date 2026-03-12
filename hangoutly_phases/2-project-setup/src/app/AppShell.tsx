import { Outlet } from 'react-router-dom';
import { AppHeader } from '../components/organisms/AppHeader';
import { AuthProvider } from '../features/auth/services/useAuth';

export function AppShell() {
  return (
    <AuthProvider>
      <div className="app-shell">
        <AppHeader />
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </AuthProvider>
  );
}
