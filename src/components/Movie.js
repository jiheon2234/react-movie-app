import PropTyes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTyes.number.isRequired,
  coverImg: PropTyes.string.isRequired,
  title: PropTyes.string.isRequired,
  summary: PropTyes.string.isRequired,
  genres: PropTyes.arrayOf(PropTyes.string).isRequired,
};

export default Movie;
