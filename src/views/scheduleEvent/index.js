import React, { Component } from 'react';
import './index.css';
import ScheduleForm from "../../components/scheduleForm";

class ScheduleEvent extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1>Schedule an Event</h1>
          <ScheduleForm />
        </div>
      </div>
    );
  }
}

export default ScheduleEvent;
