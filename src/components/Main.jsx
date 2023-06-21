import React, { Component } from "react";
import { Movies } from "./Movies";
import { basicUrl } from "../constants/constants";
import { Preloader } from "./Preloader";
import { SearchBar } from "./SearchBar";
import { FilterBar } from "./FilterBar";
//
export class Main extends Component {
  state = {
    movies: [],
    currentSearch: "matrix",
    currentFilter: "",
    loading: true,
  };
  getMovies = async (url, params) => {
    try {
      const response = await fetch(`${url}${params}`);
      const responseJSON = await response.json();
      const receivedMovies = responseJSON.Search;
      this.setState({
        movies: receivedMovies,
      });
    } catch (e) {
      console.error(e);
    }
  };
  searchMovies = async (searchValue) => {
    this.setState({ currentSearch: searchValue, loading: true });
    this.getMovies(
      basicUrl,
      `&s=${searchValue}&type=${this.state.currentFilter}`
    );
    this.setState({ loading: false });
  };
  filterMovies = (filterValue) => {
    this.setState({ currentFilter: filterValue, loading: true });
    this.getMovies(
      basicUrl,
      `&s=${this.state.currentSearch}&type=${filterValue}`
    );
    this.setState({ loading: false });
  };
  componentDidMount = () => {
    this.getMovies(
      basicUrl,
      `&s=${this.state.currentSearch}&type=${this.state.currentFilter}`
    );
    this.setState({ loading: false });
  };
  render() {
    const { movies, loading } = this.state;
    return (
      <main className="container content">
        <SearchBar onSearch={this.searchMovies} />
        <FilterBar onFilter={this.filterMovies} />
        <div>{!loading ? <Movies movies={movies} /> : <Preloader />}</div>
      </main>
    );
  }
}
