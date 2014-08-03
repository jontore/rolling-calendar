/** @jsx React.DOM */


var CurrentAppointment = React.createClass({
  formatAppointment: function (appointment) {
    return {
      summary: appointment.summary,
      start: moment(appointment.start).fromNow(),
      end: moment(appointment.end).fromNow(),
      duration: moment.duration(appointment.end - appointment.start).humanize()
    }
  },

  render: function () {
    if (this.props.data) {
      var appointment = this.formatAppointment(this.props.data);
      return (
        <section>
          <h1>{appointment.summary}</h1>
          <p>{appointment.start}</p>
          <p>{appointment.end}</p>
          <p>{appointment.duration}</p>
        </section>
      );
    } else {
      return (
        <section>
          <p>No current appointments</p>
        </section>
      );
    }
  }
});

var Appointment = React.createClass({
  getDuration: function (appointment) {
    return moment.duration(appointment.end - appointment.start).asMinutes();
  },

  getTimeToNextAppointment: function (appointment, nextAppointment) {
    if (!nextAppointment) {
      return 0;
    }
    var duration = moment.duration(nextAppointment.start - appointment.end).asMinutes();
    if (duration > 200) {
      return 200 + duration/100;
    } else if (duration < -200) {
      return -200 - duration/100;
    } else {
      return duration;
    }
  },

  handleClick: function () {
    this.props.onClick(this);
  },

  renderNowIndicator: function () {
    return (
      <li key="now" class="now">
        NOW
      </li>
    );
  },

  renderNormalAppointment: function (appointment) {
    var s = this.getDuration(appointment);
    var nextLength = this.getTimeToNextAppointment(appointment, this.props.nextAppointment);

    var style = {
      width: s,
      height: s,
      'margin-right': nextLength
    };
    var classes = React.addons.classSet({
      'appointment': true,
      'earlier': appointment.toNow < 0,
      'later': appointment.toNow > 0
    });
    return (
      <li key={appointment.uid} onClick={this.handleClick} className={classes}>
        <span className="calendar-circle" style={style}></span>
      </li>
    );
  },

  render: function () {
    var appointment = this.props.appointment;
    if (appointment.now) {
      return this.renderNowIndicator();
    } else {
      return this.renderNormalAppointment(appointment);
    }

  }
});

var AppointmentList = React.createClass({
  getInitialState: function () {
    return {
      currentAppointment: this.props.data[0]
    };
  },

  handleClick: function (appointmentComponent) {
    var appointment = this.props;
    this.setState({currentAppointment: appointmentComponent.props.appointment})
  },

  render: function () {
   var appointmentNodes = this.props.data.map(function (appointment, index) {
      var nextAppointment = this.props.data[index + 1];
      return (
        <Appointment onClick={this.handleClick} appointment={appointment} nextAppointment={nextAppointment}>
        </Appointment>
      );
    }.bind(this));
    return (
      <div>
      <ul className="appointments">
          {appointmentNodes}
      </ul>
      <CurrentAppointment data={this.state.currentAppointment}></CurrentAppointment>
      </div>
    );
  }
});

var CalendarCircle = React.createClass({

  getInitialState: function () {
    return {
      now: moment().toDate()
    };
  },

  componentWillMount: function () {
    setInterval(function () {
      if (this.isMounted()) {
        this.setState({
          now: moment().toDate()
        });
      }
    }.bind(this), 3000);
  },

  getSortedAppointments: function (appointments) {
    appointments = appointments.map(function (appointment) {
      appointment.toNow = moment(appointment.start).unix() - moment(this.state.now).unix();
      return appointment;
    }.bind(this));

    return appointments.sort(function (appointment) {
      return appointment.toNow
    });
  },

  render: function () {
    var appointments = this.getSortedAppointments(this.props.data);
    return (
      <section className="calendar-circles">
        <AppointmentList data={appointments}></AppointmentList>
      </section>
    );
  }
});

React.renderComponent(
  <CalendarCircle data={testData}/>,
  document.getElementById('content')
);
