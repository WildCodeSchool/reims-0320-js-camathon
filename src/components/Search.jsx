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
            <div className="globalSearchStyle">
                <div className="hidden"><HomeButton /></div>
                <div>
                    <p>Choose a tag to focus your research</p>
                    <button className="tagButton" type='button' onClick={this.manageModale}>{this.state.tagChosen}</button>
                </div>
                <div className={this.state.modalShow === false ? 'modalOFF' : 'modalON'}>
                    <TagList onClick={this.tagUpdate}/>
                </div>
                <div>
                    {this.props.webcams.map((webcam)=> <p>{webcam.title}</p>)}
                </div>
            </div>
          
        )
    }
}

export default Search;
