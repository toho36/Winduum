import { Link } from 'react-router-dom';

export function PageInProgress() {
  return (
    <div>
      <h1>Page is in progress</h1>
      <Link to="/">
        <button type="button">Back to Home</button>
      </Link>
    </div>
  );
};
