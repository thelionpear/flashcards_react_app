import React from 'react' 

class FlashcardForm extends React.Component {
    state = {name: '', value: ''}
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                value={this.state.name}
                required 
                placeholder="Add A Flashcard Question" 
                />
                <input 
                value={this.state.name}
                required 
                placeholder="Add An Flashcard Answer" 
                />
            </form>
        )
    }
}

export default FlashcardForm; 