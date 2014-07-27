/** @jsx React.DOM */

var Appointment = React.createClass({
  render: function () {
    var duration = moment.duration(this.props.data.start - this.props.data.end).humanize();
    var start = moment(this.props.data.start).fromNow();
    var end = moment(this.props.data.end).fromNow();
    return (
      <div class="appointment">
        <ul>
          <li>{this.props.data.summary}</li>
          <li>{duration}</li>
          <li>Started: {start}</li>
          <li>Ended: {end}</li>
        </ul>
      </div>
    );
  }
});

var AppointmentList = React.createClass({
  render: function () {
     var appointmentNodes = this.props.data.map(function (appointment) {
      return (
        <Appointment data={appointment}>
        </Appointment>
      );
    });
    return (
      <div className="appointments">
        {appointmentNodes}
      </div>
    );
  }
});

var CalendarCircle = React.createClass({
  render: function () {
    return (
      <section className="calendar-circles">
        <AppointmentList data={this.props.data}></AppointmentList>
      </section>
    );
  }
});

React.renderComponent(
  <CalendarCircle data={testData}/>,
  document.getElementById('content')
);
