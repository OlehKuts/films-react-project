import React from "react";

export class MovieItem extends React.Component {
  render() {
    const {
      Title: title,
      Poster: poster,
      Year: year,
      Type: type,
    } = this.props.movie;
    return (
      <div className="wholeCard">
        <div className="row">
          <div className="col s12 m7">
            <div className="card">
              <div className="card-image">
                {poster === "N/A" ? (
                  <img
                    src="https://placehold.co/200x300?text=image"
                    alt="img"
                  />
                ) : (
                  <img src={poster} alt="img" />
                )}
              </div>
              <div className="card-content">
                <div className="movieTitle">{title}</div>
                <div className="movieDetails">
                  <p>{type}</p>
                  <p>{year}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
