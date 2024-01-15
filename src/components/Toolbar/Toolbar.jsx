import './Toolbar.css'
import React from "react";

class Toolbar extends React.Component {
  render() {
    const {filters, onSelectFilter, selected} = this.props
    return (
      <div className={"button-list"}>
        {filters.map((filter) => <button key={filter}
                                         onClick={() => onSelectFilter(filter)}
                                         className={`button-list__btn ${selected === filter ? 'button-list__btn_active' : ''}`}>{filter}</button>)}
      </div>
    )
  }
}

export default Toolbar;