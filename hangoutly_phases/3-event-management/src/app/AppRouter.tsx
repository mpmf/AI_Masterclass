import { Route, Routes } from 'react-router-dom';
import { AppShell } from './AppShell';
import { LoginPage } from '../features/auth/pages/LoginPage';
import { SignupPage } from '../features/auth/pages/SignupPage';
import { ProtectedActionDemoPage } from '../features/home/pages/ProtectedActionDemoPage';
import { RequireAuth } from './RequireAuth';
import { CreateEventPage } from '../features/events/pages/CreateEventPage';
import { EventsListPage } from '../features/events/pages/EventsListPage';

export function AppRouter() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<EventsListPage />} />
        <Route path="/events" element={<EventsListPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/events/new"
          element={
            <RequireAuth>
              <CreateEventPage />
            </RequireAuth>
          }
        />
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
