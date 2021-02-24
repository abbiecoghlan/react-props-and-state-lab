import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onAdoptPet = (id) => {
    const updatedPets = this.state.pets.map(pet => {
      if (pet.id === id) {
        return {...pet, isAdopted: true}
      } else {
      return pet}
    })
    this.setState({
      pets: updatedPets
    })
  }


  onFindPetsClick = () => {
      if (this.state.filters.type === "cat") {
    fetch("/api/pets?type=cat")
    .then((response) => response.json())
    .then(allPets => {
      this.setState({
        pets: allPets
      })
    })
  }
  else if (this.state.filters.type === "dog") {
    fetch("/api/pets?type=dog")
    .then((response) => response.json())
    .then(allPets => {
      this.setState({
        pets: allPets
      })
    })
  }
  else if (this.state.filters.type === "micropig") {
    fetch("/api/pets?type=micropig")
    .then((response) => response.json())
    .then(allPets => {
      this.setState({
        pets: allPets
      })
    })
  }

  else {
    fetch("/api/pets")
    .then((response) => response.json())
    .then(allPets => {
      this.setState({
        pets: allPets
      })
    })
  }

    }



  onChangeType = (e) => {
    console.log(e.target.value)
    this.setState({
      filters: {type: e.target.value}
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onFindPetsClick={this.onFindPetsClick} onChangeType={this.onChangeType}  value={this.state.filters}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
