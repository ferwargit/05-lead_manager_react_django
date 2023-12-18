import React, { Component, Fragment } from 'react';
import Swal from 'sweetalert2';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, message } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.name) Swal.fire('Error', `Name: ${error.msg.name.join()}`, 'error');
      if (error.msg.email) Swal.fire('Error', `Email: ${error.msg.email.join()}`, 'error');
      if (error.msg.message) Swal.fire('Error', `Message: ${error.msg.message.join()}`, 'error');
    }

    if (message !== prevProps.message) {
      if (message.deleteLead) Swal.fire('Success', message.deleteLead, 'success');
      if (message.addLead) Swal.fire('Success', message.addLead, 'success');
    }
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = (state) => ({
  error: state.errors,
  message: state.messages,
});

export default connect(mapStateToProps)(Alerts);