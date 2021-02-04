import { Component } from 'react';
import './App.css';
import Searchbar from './component/Searchbar/Searchbar';
import ImageCallery from './component/ImageGallery/ImageCallery'



export default class App extends Component {
  state = {
    tagsName: ' ', 
    images: [] 
  }

  //метод который получает проп{tags} от searchbar и записывает в стейт
  hendleFormSubmit = (tagsName) => {
    console.log(tagsName)
    this.setState({ tagsName })
  }

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.hendleFormSubmit} />

        <ImageCallery tagsName={this.state.tagsName} />
      </div>
    )
  }
}


