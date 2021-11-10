import React, { Component } from 'react';


class FormTest extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Text: 'Text',
        Date: 'Date'
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({[event.target.name]: event.target.value});
    }
  
    handleSubmit(event) {
      alert('this  was submitted: text=' + this.state.Text + " date=" + this.state.Date);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            text:
            <textarea name="Text" value={this.state.Text} onChange={this.handleChange} />
          </label>
          <label>
            date:   
            <textarea name="Date" value={this.state.Date} onChange={this.handleChange} />
          </label>  
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default FormTest