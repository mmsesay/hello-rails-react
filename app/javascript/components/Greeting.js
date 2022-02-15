import React from "react"
import PropTypes from "prop-types"
class Greeting extends React.Component {
  render () {
    return (
      <div>
        Greeting: {this.props.greeting}
      </div>
    );
  }
}

Greeting.propTypes = {
  greeting: PropTypes.string
};
export default Greeting
