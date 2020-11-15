import React from "react";
import "./Movies.css";

class Movies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      poster: "",
      comment: "",
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    };
    const url = "https://post-a-form.herokuapp.com/api/movies";
    fetch(url, config)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          alert(res.error);
        } else {
          alert(`movies #${res} has been successfully added!`);
        }
      })
      .catch((e) => {
        console.error(e);
        alert("There was an error when adding the movies.");
      });
  };
  render() {
    return (
      <div className="FormMovies">
        <h1>Movies</h1>

        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Information</legend>
            <div className="form-data">
              <label htmlFor="lastname">Movies Name</label>
              <input
                type="text"
                id="Moviesname"
                name="title"
                onChange={this.onChange}
                value={this.state.title}
              />
            </div>

            <div className="form-data">
              <label htmlFor="firstname">Movies Url</label>
              <input
                type="text"
                id="MoviesUrl"
                name="poster"
                onChange={this.onChange}
                value={this.state.poster}
              />
            </div>

            <div className="form-data">
              <label htmlFor="comment">Comment</label>
              <textarea
                id="comment"
                name="comment"
                rows="4"
                cols="50"
                onChange={this.onChange}
                value={this.state.comment}
              ></textarea>
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="Send" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Movies;
