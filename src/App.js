import React from 'react';
import './App.css';
import axios from 'axios'

class App extends React.Component {
  state = {
    mensaje: null
  }
  componentDidMount = async () => {
    const url = 'http://192.168.0.108:3001'
    const route = '/foro'
    const {data: resp} = await axios.get(`${url}${route}`);
    this.setState({
      mensaje: resp.user
    })
  }
  render(){
    const { mensaje } = this.state;
    return (
      <div className="App">
        {mensaje}
      </div>
    );
  }
}

export default App;
