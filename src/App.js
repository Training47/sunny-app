import React from 'react';
import Heading from './components/heading';
import Form from './components/form';
import './App.css';

  const api_key="7011195e7fc598f31f9d50649e3d11ad";

  class App extends React.Component {

  state= {
  temperature: "",
  city: "",
  country: "",
  humidity: "",
  wind: "",
  icon: "",
  description: "",
  error: ""
}

  render() {
  return (
    <div>
      <h2><Heading/></h2>
          <Form/>
    </div>
  )
  }
}
    


export default App;
