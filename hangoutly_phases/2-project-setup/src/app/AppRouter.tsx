import { Route, Routes } from 'react-router-dom';
import { AppShell } from './AppShell';
import { LoginPage } from '../features/auth/pages/LoginPage';
import { SignupPage } from '../features/auth/pages/SignupPage';
import { HomePage } from '../features/home/pages/HomePage';
import { ProtectedActionDemoPage } from '../features/home/pages/ProtectedActionDemoPage';
import { RequireAuth } from './RequireAuth';

export function AppRouter() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/rsvp-demo"
          element={
            <RequireAuth>
              <ProtectedActionDemoPage />
            </RequireAuth>
          }
        />
      </Route>
    </Routes>
  );
}
