import { Component } from "react";

class Error extends Component {
  // Makes component error boundary
  // when any child get error
  constructor() {
    super();
    this.state = { hasError: false };
  }

  componentDidCatch(error) {
    this.setState({ hasError: true });
    console.log(error);
  }

  render() {
    if (this.state.hasError) {
      <p>Something went wrong!</p>;
    }
    return this.props.children;
  }
}
export default Error;
