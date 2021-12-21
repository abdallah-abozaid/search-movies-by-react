import React from "react";

const Movie = (props) => {
  const view = () => {
    window.location.href = `https://www.themoviedb.org/movie/${props.data.id}`;
  };
  return (
    <>
      {props.data.original_title != null && (
        <div className="movie container my-5">
          <div className="row">
            <div className="col-12 col-sm-3">
              <img
                src={`https://image.tmdb.org/t/p/w185${props.data.poster_path}`}
                alt=""
              />
            </div>
            <div className="col-12 col-sm-9 flexing">
              <div>
                <h3>{props.data.title}</h3>
                <p className="mb-5">{props.data.overview}</p>
                <div className="row">
                  <div className="col-6">
                    <p> {props.data.release_date}</p>
                  </div>
                  <div className="col-6 text-end vot">
                    <span> {props.data.vote_average}</span>
                  </div>
                </div>
                <div>
                  <button onClick={view}>view</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Movie;
