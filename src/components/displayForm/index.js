import React, { Component } from 'react';
import './index.css';

class DisplayForm extends Component {

  render() {
    return (
      <form onSubmit={this.props.getEvents}>

        <div className="form-group">
          <label htmlFor="day">Day:</label>
          <input type="number" className="form-control" placeholder="Enter Day..." name="day" />
        </div>

        <div className="form-group">
          <label htmlFor="month">Month:</label>
          <input type="number" className="form-control" placeholder="Enter Month..." name="month" />
        </div>

        <div className="form-group">
          <label htmlFor="year">Year:</label>
          <input type="number" className="form-control" placeholder="Enter Year..." name="year" required />
        </div>

        <button type="submit" className="btn btn-primary">Get Events</button>
      </form>
    );
  }
}

export default DisplayForm;
