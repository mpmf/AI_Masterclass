import { Button } from '../../../components/atoms/Button';

export function ProtectedActionDemoPage() {
  return (
    <section className="card stack">
      <h1 style={{ margin: 0 }}>Protected Action Demo</h1>
      <p style={{ margin: 0 }}>
        This route simulates RSVP protection and is only visible to authenticated users.
      </p>
      <Button>RSVP (demo)</Button>
    </section>
  );
}
