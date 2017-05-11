import React from 'react';

class ItemDetail extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let {id, name, pokemon_id, price, happiness, image_url} = this.props.ItemDetail;
    let attr = [id, name, pokemon_id, price, happiness];
    return (
      <ul>
        <li> Name: { name }</li>
        <li> Price: { price }</li>
        <li> Happiness: { happiness }</li>
      </ul>
    );
  }

}

export default ItemDetail;
