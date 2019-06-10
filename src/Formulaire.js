import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, FormGroup, Label, Input} from "reactstrap";
import "./App.css";

export default class Formulaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      globalTitle: ""
    };

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
  this.setState({ title: event.target.value });
}

handleSubmit(event) {
  event.preventDefault();
  this.setState({ globalTitle: `Mon formulaire - ${this.state.title}` });
  console.log("Titre changé");
}

componentDidMount() {
  console.log("Formulaire rendu");
}



  render() {
    return (
      <div>
        <h1>{this.state.globalTitle}</h1>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label htmlFor="title" sm={4}>
          </Label>
            <Input type="text" name="title" id="title" onChange={this.handleChange} value={this.state.title} />
          </FormGroup>
          <Button type="submit"  value="submit">Validation</Button>
        </Form>
      </div>
    );
  }
}



