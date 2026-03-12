import { FormEvent, useState } from 'react';
import { Button } from '../../../components/atoms/Button';
import { Input } from '../../../components/atoms/Input';

type AuthFormProps = {
  title: string;
  submitLabel: string;
  showNameField?: boolean;
  onSubmit: (args: { email: string; password: string; fullName?: string }) => Promise<void>;
};

export function AuthForm({ title, submitLabel, showNameField = false, onSubmit }: AuthFormProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await onSubmit({ email, password, fullName: showNameField ? fullName.trim() : undefined });
    } catch (submitError) {
      const message = submitError instanceof Error ? submitError.message : 'Unexpected error';
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="card" style={{ maxWidth: 480, margin: '1rem auto' }}>
      <form className="stack" onSubmit={handleSubmit}>
        <h1 style={{ margin: 0 }}>{title}</h1>
        {showNameField ? (
          <Input
            id="full-name"
            type="text"
            label="Name"
            required
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />
        ) : null}
        <Input
          id="email"
          type="email"
          label="Email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          id="password"
          type="password"
          label="Password"
          minLength={8}
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        {error ? <p style={{ color: '#dc2626', margin: 0 }}>{error}</p> : null}
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : submitLabel}
        </Button>
      </form>
    </section>
  );
}
