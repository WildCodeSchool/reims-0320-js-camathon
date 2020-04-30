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
            webcamID: '',
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
                
                <div className="tagBG">
                    <p>Choose a tag to focus your research</p>
                    <button className="tagButton" type='button' onClick={this.manageModale}>{this.state.tagChosen}</button>
                </div>
                <div className={this.state.modalShow === false ? 'modalOFF' : 'modalON'}>
                    <TagList onClick={this.tagUpdate}/>
                </div>
                <div className="webcamList">
                    {this.props.webcams.filter((webcam) => (
                        this.state.tagChosen === 'choose a tag' || webcam.category.findIndex(
                            (category) => category.id === this.state.tagChosen
                        ) !== -1
                    )).map((webcam)=> (
                        <button
                            onClick={()=> {
                                this.props.setLive(webcam)
                                this.props.history.push('/live');
                            }}
                            type="button"
                            className="webcamButton"
                        >
                            {webcam.title}
                        </button>
                    ))}
                </div>
            </div>
          
        )
    }
}

export default Search;
