import React from 'react';
import HomeButton from "./HomeButton";
import TagList from "./TagList";
import './search.css'

class Search extends React.Component {
    constructor() {
        super(props);
        this.state = {
            modalShow: false,
            tagChoosen : 'chose a tag',
        };
    }

    manageModale =() => {
        {this.setState({ modalShow: !this.state.modalShow})}
    }

    tagUpdate = (tag) => {
        this.setState({tagChoosen : tag })
    }
    
    render() {
        return(
            <div>
                <div><HomeButton /></div>
                <div>
                    <p>text tag</p>
                    <button type='button' onClick={this.manageModale}>{this.state.tagChoosen}</button>
                </div>
                <div className={this.state.modalShow === false ? 'modalOFF' : 'modalON'}>
                    <TagList  manageModale={this.manageModale} tagUpdate={this.tagUpdate}/>
                </div>
             
            </div>
          
        )
    }
}

export default Search;
