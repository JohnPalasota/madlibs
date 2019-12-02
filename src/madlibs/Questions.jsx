import React from 'react';

import { MadLib } from './MadLib';

export class Questions extends React.Component { 
    state = {
        adjective1: '',
        adjective2: '',
        noun1: '',
        pluralNoun: '',
        noun2: '',
        isClicked: false

    }
    render() {
        return <>
        <body className="questionsBody">
            <h1 className="madTitle">Mad Libs</h1>
            <div className="container">
                <input type="text" className="adjective1 form-control question" placeholder="adjective" value={ this.state.adjective1 }
                onChange={ e => this.setState( { adjective1: e.target.value } ) }></input>

                <input type="text" className="adjective2 form-control question" placeholder="adjective" value={ this.state.adjective2 }
                onChange={ e => this.setState( { adjective2: e.target.value } ) }></input>

                <input type="text" className="noun1 form-control question" placeholder="noun" value={ this.state.noun1 }
                onChange={ e => this.setState( { noun1: e.target.value } ) }></input>

                <input type="text" className="pluralNoun form-control question" placeholder="plural noun" value={ this.state.pluralNoun }
                onChange={ e => this.setState( { pluralNoun: e.target.value } ) }></input>

                <input type="text" className="noun2 form-control question" placeholder="noun" value={ this.state.noun2 }
                onChange={ e => this.setState( { noun2: e.target.value } ) }></input>

                <button type="button" className="btn btn-primary form-control question" onClick={ e=> this.setState({isClicked: true}) }>Submit</button>
            </div>
            <div className="madlib container" style={{"display": this.state.isClicked===true ? "block" : "none"}}>
                <MadLib user={this.state}/>
                <button type="button" className="btn btn-danger" onClick={e=> this.clearState()}>Reset</button>
            </div>
        </body>
        </>
        
    }

    clearState() {
        this.setState({isClicked: false, adjective1: '', adjective2: '', noun1: '', pluralNoun: '', noun2: ''});
    }


}
