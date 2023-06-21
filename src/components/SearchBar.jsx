import React, { Component } from "react";

export class SearchBar extends Component {
  state = {
    search: "matrix",
  };
  searchChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };
  render() {
    const { onSearch } = this.props;
    return (
      <>
        <div className="row searchWrapper">
          <div className="input-field col s6 searchBar">
            <input
              placeholder="Search..."
              type="search"
              className="validate"
              value={this.state.search}
              onChange={this.searchChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onSearch(this.state.search);
                }
              }}
            />
            <button
              className="btn waves-effect waves-light"
              name="action"
              onClick={() => onSearch(this.state.search)}
            >
              Search
              <i className="material-icons right"></i>
            </button>
          </div>
        </div>
      </>
    );
  }
}
