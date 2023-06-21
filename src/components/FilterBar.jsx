import React, { Component } from "react";

export class FilterBar extends Component {
  state = {
    filterValue: "",
  };
  render() {
    const { onFilter } = this.props;
    const { filterValue } = this.state;
    return (
      <>
        <div className="row filterWrapper">
          <p>
            <label>
              <input
                type="radio"
                name="filterValue"
                value=""
                onChange={(e) => {
                  onFilter(e.target.value);
                  this.setState({
                    filterValue: e.target.value,
                  });
                }}
                checked={filterValue === ""}
              />
              <span>All</span>
            </label>
          </p>
          <p>
            <label>
              <input
                type="radio"
                name="filterValue"
                value="movie"
                onChange={(e) => {
                  onFilter(e.target.value);
                  this.setState({
                    filterValue: e.target.value,
                  });
                }}
                checked={filterValue === "movie"}
              />
              <span>Movies only</span>
            </label>
          </p>
          <p>
            <label>
              <input
                type="radio"
                className="with-gap"
                name="filterValue"
                value="series"
                onChange={(e) => {
                  onFilter(e.target.value);
                  this.setState({
                    filterValue: e.target.value,
                  });
                }}
                checked={filterValue === "series"}
              />
              <span>Series only</span>
            </label>
          </p>
        </div>
      </>
    );
  }
}
