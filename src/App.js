import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Main } from './components/Main';


export class  App extends React.Component {

  render () {
    return (
      <div className="App">
              <Header />
              <Main/> 
              <Footer/>
      </div>
    );
  }
л
}

