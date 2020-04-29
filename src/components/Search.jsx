import React from 'react';
import HomeButton from "./HomeButton";
import TagList from "./TagList";
import './search.css';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
            tagChosen: 'choose a tag',
        };
    }

    manageModale =() => {
        this.setState({
            modalShow: !this.state.modalShow,
        })
    }

    tagUpdate = (tag) => {
        this.setState({
            tagChosen : tag,
            modalShow: false,
        })
    }
    
    render() {
        return(
            <div>
                <div><HomeButton /></div>
                <div>
                    <p>text tag</p>
                    <button type='button' onClick={this.manageModale}>{this.state.tagChosen}</button>
                </div>
                <div className={this.state.modalShow === false ? 'modalOFF' : 'modalON'}>
                    <TagList onClick={this.tagUpdate}/>
                </div>
             
            </div>
          
        )
    }
}

export default Search;
