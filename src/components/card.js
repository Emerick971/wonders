import React from 'react';
import './card.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class Wondersworld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: false,
    }
  }

    
  render() { 
  return (
    <div className="Card">
        <Card style={{ width: '18rem', margin:'1em' }}>

            <Card.Img className="Image" variant="top" src={this.props.img} alt='' />
                <Card.Body className="Body">
                    <span className={this.state.favorite ? 'is-favorite' : ''}
                        onClick={event => {
                        const newFavorite = !this.state.favorite;
                        this.setState({favorite:newFavorite});}}>
                          &#9733;
                    </span>
                      <Card.Title className="Title">{this.props.name}</Card.Title>
                      <Card.Text className="Text">
                         {this.props.location}
                      </Card.Text>
                      <Card.Text className="Text">
                        {this.props.year}
                      </Card.Text>
                    <Button variant="outline-primary" className="BtnCard">Click Me!</Button>
                </Card.Body>
        </Card>
    </div>
  );
}
}

export default Wondersworld;