import React, { Component } from "react";
import "./App.css";

export default class FormFilm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameFilm: "",
      poster: "",
      comment: ""
    }
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.state({
      [e.target.name]: e.target.value,
    });
  }
  submitForm(e) {
    e.preventDefault();
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state),
    };
    const url = "http://campus-bordeaux.ovh:3001/api/quests/movies/";

    fetch(url, config)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          alert(res.error);
        } else {
          alert(`Le film est bien enregistré ${res}!`);
        }
      })
      .catch(e => {
        console.error(e);
        alert("Erreur lors de téléchargement, recommence");
      });
  }

  render() {
    return (
      <div className="FormFilm">
        <form onSubmit={this.submitForm}>
          <div className="nameFilm">
            <label htmlFor="nameFilm">
              Nom du film
              <input
                type="text"
                name="nameFilm"
                id="nameFilm"
                onChange={this.onChange}
                value={this.state.nameFilm}
                size={33}
              />
            </label>
          </div>
          <div className="poster">
            <label htmlFor="poster">
              Affiche du Film
              <input
                type="url"
                name="poster"
                id="poster"
                onChange={this.onChange}
                value={this.state.poster}
                size={33}
              />
            </label>
          </div>
          <div className="comment">
            <label htmlFor="comment">Commentaires</label>
            <textarea
              name="comment"
              id="comment"
              onChange={this.onChange}
              value={this.state.comment}
              rows={10}
              cols={35}
            />
            </div>
            <div className="submit">
            <input type="submit" value="Envoyer" />
          </div>
        </form>
      </div>
    );
  }
}
