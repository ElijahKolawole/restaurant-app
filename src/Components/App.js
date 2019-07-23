import React from 'react';
import axios from 'axios';
import FoodItem from './FoodItem';
class App extends React.Component {
   constructor(props){
      super(props);
      this.state = {
          name: [],
          price: [],
          picture: []
     };
}
componentDidMount = () => {
    axios.get('http://localhost:8080/api/dishes?access_token=Ywyr3vxEESqsZulYp9TBOiSFAz8Wdqdf3dNhLoARUfRa7fpVbhpVHHGRIu4ES0ON').then((res) => {
         for (var i = 0; i < res.data.length; i++)
         this.setState({
             name: [...this.state.name, res.data[i].name],
             price: [...this.state.price, res.data[i].price],
             picture: [...this.state.picture, res.data[i].picture]
         });
    }).catch ((err) => {
         console.log(err);
    });
}
Style = {
   margin: '10px',
   padding: '10px'
};
render() {
    return (
        <div className="ui list" style={this.Style} >
        <h1> Leees Kitchen Restaurant Menu </h1>
        <FoodItem
            picture={this.state.picture[0]}
            name={this.state.name[0]}
            price={this.state.price[0]}
        />
       <br/>             <FoodItem
            picture={this.state.picture[1]}
            name={this.state.name[1]}
            price={this.state.price[1]}
       />
       <br/>
       <FoodItem
            picture={this.state.picture[3]}
            name={this.state.name[3]}
            price={this.state.price[3]}
       />
      <br/>
      <FoodItem
           picture={this.state.picture[3]}
           name={this.state.name[3]}
           price={this.state.price[3]}
        />

      </div>
   );
 }
}
export default App;