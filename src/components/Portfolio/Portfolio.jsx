import Toolbar from "../Toolbar/Toolbar.jsx";
import ProjectList from "../ProjectList/ProjectList.jsx";
import {data} from "/src/data.js"
import React from "react";

class Portfolio extends React.Component {
  state = {
    item: "All"
  }
  clickHandler (filter)  {
    this.setState({item: filter})
  }

  render() {
    return (
      <>
        <Toolbar
          filters={["All", "Websites", "Flayers", "Business Cards"]}
          selected={this.state.item}
          onSelectFilter={(filter) => this.clickHandler(filter)}
        />
        <ProjectList projects={data.filter(filter => this.state.item === filter.category || this.state.item === "All")}/>
      </>
    );
  }
}

export default Portfolio;