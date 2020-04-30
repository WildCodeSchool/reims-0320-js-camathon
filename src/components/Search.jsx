import React from 'react';
import HomeButton from "./HomeButton";
import TagList from "./TagList";
import './search.css';
import { Link } from 'react-router-dom';


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

    setWebcams = (webcam) =>{
        this.props.setWebcams(webcam)
        
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
                    {this.props.webcams.map((webcam)=> <button onClick={()=> this.setWebcams(webcam) } type="button" className="webcamButton"><Link to="/live">{webcam.title}</Link></button>)}
                </div>
            </div>
          
        )
    }
}

export default Search;
