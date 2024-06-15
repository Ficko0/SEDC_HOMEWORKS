import { Component } from "react";

export class Grandchild extends Component {
  constructor(props) {
    super(props);
    console.log("Grandchild constructor");
    this.state = {
      grandChildData: "Grandchild Data",
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Grandchild getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Grandchild componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Grandchild shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Grandchild getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Grandchild componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Grandchild componentWillUnmount");
  }

  // Start of custom methods
  changeGrandchildData = () => {
    this.setState({
      grandChildData: "Updated Grandchild Data",
    });
  };

  noRenderChange = () => {
    console.log(
      "This will not trigger a re-render on the grandchild component"
    );
  };

  render() {
    console.log("Grandchild render");
    return (
      <div>
        <h3>Grandchild Component</h3>
        <p>Data from child: {this.props.childData}</p>
        <button onClick={this.changeGrandchildData}>
          Change grandchild Data
        </button>
        <button onClick={this.noRenderChange}>No render Change</button>
      </div>
    );
  }
}
