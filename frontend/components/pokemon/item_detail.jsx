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
        <img src={image_url} />
        {attr.map((att,index) => <li key={"item_attr" + index}>{att}</li>)}
      </ul>
    );
  }

}

export default ItemDetail;
