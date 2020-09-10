import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class Connexion extends Component {
    state = {
        pseudo : '',
        goToChat : false
    }
    handleChange = event => {
        const pseudo = event.target.value
        this.setState({pseudo})
    }

    handleSubmit = event => {
        //gerer ça par moi meme
        event.preventDefault()
        this.setState({'goToChat': true})
    }

    render() {
        if(this.state.goToChat){
            //push garde dans l'historique
            return <Redirect push to={`/Pseudo/${this.state.pseudo}`}/>
        }
        return (
            <div className='connexionBox'>
                <form className='connexion' onSubmit={this.handleSubmit}>
                    <input
                    value={this.state.pseudo}
                    onChange={this.handleChange}
                    placeholder='Pseudo'
                    type='text'
                    required
                    />
                    <button type='submit'>GO</button>
                </form>
            </div>
        );
    }
}

export default Connexion;