import { Component } from "react";
import { Child } from "./Child";

// export const Parent = () => {
//   return <div>Parent</div>;
// };

export class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showChild: true,
      parentData: "Parent Data",
    };
    console.log("Parent Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Parent getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Parent shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Parent getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Parent componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Parent componentWillUnmount");
  }

  // Start of custom methods
  toggleChild = () => {
    this.setState((prevState) => ({
      showChild: prevState.showChild,
    }));
  };

  changeParentData = () => {
    this.setState({
      parentData: "Updated Parent Data",
    });
  };

  noRenderChange() {
    console.log("Parent Method which doesn't trigger render");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>Parent Component</h1>
        <button onClick={this.toggleChild}>Toggle Child Component</button>
        <button onClick={this.changeParentData}>Change Parent Data</button>
        <button onClick={this.noRenderChange}>No Render Change</button>
        {this.state.showChild && <Child parentData={this.state.parentData} />}
      </div>
    );
  }
}
