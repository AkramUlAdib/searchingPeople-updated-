import React, { Component } from 'react';
import CardList from '../components/CardList'
import Scroll from '../components/Scroll'
import { people } from '../people';
import SearchBox from '../components/SearchBox'
import './App.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            people: people,
            searchfield: ''
        }
    }

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users'
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(users => {
    //         this.setState({ people: users})
    //     });
    // }
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }
    
    render() {
        const { people, searchfield } = this.state;
        const filteredPeople = people.filter(people => {
            return people.username.toLowerCase().includes(searchfield.toLowerCase())
        })
        if(people.length === 0) {
            return <h2>Loading</h2>
        } else {
            return(
                <div className='tc'>
                    <h1 className='f1'>PEOPLES</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList people={filteredPeople}/>
                    </Scroll>
                    
                </div>    
            )
        }    
    }
}

export default App;
