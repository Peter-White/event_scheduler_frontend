import React, { Component } from 'react';
import './index.css';

class ScheduleForm extends Component {
  saveEvent = async(e) => {
    e.preventDefault();

    let day = e.target.elements.day.value;
    let month = e.target.elements.month.value;
    let year = e.target.elements.year.value;
    let title = e.target.elements.title.value;
    let notes = e.target.elements.notes.value;

    let URL = "http://localhost:5000/api/save";

    let response = await fetch(URL, {
      headers: {
        'Content-Type': 'application/json',
        'day': day,
        'month': month,
        'year': year,
        'title': title,
        'notes': notes
      }
    });

    let data = await response.json();

    if (data.success) {
      alert(`${title} has been scheduled for ${month}/${day}/${year}`)
    } else {
      alert(`Could not save event.`);
    }

  }
  render() {
    return (
      <form onSubmit={this.saveEvent}>

        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input type="text" className="form-control" placeholder="Enter Title..." name="title" required />
        </div>

        <div className="form-group">
          <label htmlFor="day">Day:</label>
          <input type="number" className="form-control" placeholder="Enter Day..." name="day" required />
        </div>

        <div className="form-group">
          <label htmlFor="month">Month:</label>
          <input type="number" className="form-control" placeholder="Enter Month..." name="month" required />
        </div>

        <div className="form-group">
          <label htmlFor="year">Year:</label>
          <input type="number" className="form-control" placeholder="Enter Year..." name="year" required />
        </div>

        <div className="form-group">
          <label htmlFor="notes">Notes:</label>
          <textarea type="text" className="form-control" placeholder="Enter Notes..." name="notes" required />
        </div>
        <button type="submit" className="btn btn-primary">Save Event</button>
      </form>
    );
  }
}

export default ScheduleForm;
