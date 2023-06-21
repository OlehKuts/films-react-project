import React from "react";
import { MovieItem } from "./MovieItem";

export class Movies extends React.Component {
  render() {
    const { movies = [] } = this.props;
    return (
      <div className="movies">
        {movies.length ? (
          movies.map((item) => <MovieItem key={item.imdbID} movie={item} />)
        ) : (
          <h3>Nothing found</h3>
        )}
      </div>
    );
  }
}
