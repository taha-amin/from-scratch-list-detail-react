import { Link } from 'react-router-dom';

export default function Pokemon({ pokemon }) {
  return (
    <Link to={`/pokemon/${pokemon.id}`}>
      <div className="pokemon">
        <p>{pokemon.name}</p>
      </div>
    </Link>
  );
}
