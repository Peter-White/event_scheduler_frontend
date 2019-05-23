import React, { Component } from 'react';
import './index.css';
import DisplayForm from '../../components/displayForm';
import DisplayTable from '../../components/displayTable';

class DisplayEvents extends Component {
  constructor() {
    super();
    this.state = {
      "events": []
    }
  }

  getEvents = async(e) => {
      e.preventDefault();

      let day = e.target.elements.day.value;
      let month = e.target.elements.month.value;
      let year = e.target.elements.year.value;

      let URL = "http://localhost:5000/api/retrieve";

      let response = await fetch(URL, {
        headers: {
          'Content-Type': 'application/json',
          'day': day,
          'month': month,
          'year': year
        }
      });

      let data = await response.json();

      this.setState({ 'events': data });
  }

  deleteEvent = async(id) => {
    if (!window.confirm('Are you sure you want to delete this event?')) {
      return;
    }

    let URL = "http://localhost:5000/api/delete";

    let response = await fetch(URL, {
      headers: {
        'Content-Type': 'application/json',
        'event_id': id
      }
    });

    let message = await response.json();

    if(message.success) {
      let events = this.state.events;

      for (let i in events) {
          if (events[i].id === id) {
            events.splice(i, 1);
            break;
          }
      }

      this.setState({ events });

      alert(`Event id: ${id} has been deleted.`);
    } else {
      alert('FAIL');
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1>Display an Event</h1>
          <DisplayForm getEvents={this.getEvents}/>
        </div>
        <div className="col-md-10 offset-md-1">
          <DisplayTable events={this.state.events} deleteEvent={this.deleteEvent}/>
        </div>
      </div>
    );
  }
}

export default DisplayEvents;
