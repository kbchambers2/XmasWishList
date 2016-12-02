import React, { Component } from 'react';
import { Link } from 'react-router';
import base from '../config/Rebase';
import NavBar from './NavBar';
import Masonry from 'react-masonry-component';

class Names extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }

  getNames(){
    base.fetch('/', {
      context: this,
      asArray: true,
      then(data){
        //console.log(data);
        this.setState({data: data})
      }
    });
  }

  componentDidMount(){
    this.getNames();
  }

  render(){
    //console.log(this.state.data);
    const styles = {
      wrapper: {
        listStyleType: "none",
        border: "1px solid lightgray",
        margin: "10px",
        borderRadius: "5px",
        maxWidth: "30%"
      },
      image: {
        width: "90%",
        margin: "5px"
      }
    }
    var childElements = this.state.data.map(function(object, index){
       return (
            <li className="image-element-class" style={styles.wrapper}>
              <Link to={`/wish-list/${object.key}`} key={index}>
                <div>
                  <p>{object.personInfo.name}</p>
                  <p><img src={object.personInfo.avatar} alt="avatar" className="img-circle" style={styles.image}/></p>
                </div>
              </Link>
            </li>
        );
    });
    return(

      <div>
        <NavBar />
        <h2 style={{color: "gray"}}>Friends</h2>
        <Masonry
              className={'my-gallery-class'}
              elementType={'ul'}
              disableImagesLoaded={false}
              updateOnEachImageLoad={false}
          >
              {childElements}
          </Masonry>
      </div>

    )
  }
}

export default Names;
