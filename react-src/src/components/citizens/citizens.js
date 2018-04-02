/*jshint esversion: 6 */
import React from 'react';
import './citizens.css';

class Citizens extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name: "",
      age: "",
      gender: "male",
      location: "",
      citizenIdUpdate: "",
      locationUpdate: "",
      citizenIdMutation: "",
      flag: 1
    };

    this.handleChange = this.handleChange.bind(this);
    this.addCitizen = this.addCitizen.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
    this.setFlag = this.setFlag.bind(this);
  }

  addCitizen(){
    fetch('https://mutanthub.herokuapp.com/citizens', {
      method: 'POST',
      headers: {
        'Accept': '*',
        'Content-Type': 'application/json',
      },
      body: {
        name: this.state.name,
        gender: this.state.gender,
        age: this.state.age,
        location: this.state.location
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
    })
    .catch((error) => {
      console.error(error);
    });
    console.log(this.state);
  }

  updateLocation(){
    fetch('https://mutanthub.herokuapp.com/citizens/' + this.state.citizenIdUpdate, {
      method: 'PATCH',
      headers: {
        'Accept': '*',
        'Content-Type': 'application/json',
      },
      body: {
        location: this.state.locationUpdate
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
    })
    .catch((error) => {
      console.error(error);
    });
    console.log(this.state);
  }

  setFlag(){
    fetch('https://mutanthub.herokuapp.com/citizens/' + this.state.citizenIdMutation + "/" + this.state.flag, {
      method: 'PATCH',
      headers: {
        'Accept': '*',
        'Content-Type': 'application/json',
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
    })
    .catch((error) => {
      console.error(error);
    });
    console.log(this.state);
  }

  handleChange(event) {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-12 col-md-6 p-3">
          <h3>Add citizen</h3>
          <img className="mb-3" src={this.state.gender === 'female' ? 'user-f.png' : 'user-m.png'} height="200"/>
          <form>
            <div className="form-group">
              <input type="text" className="form-control" id="formGroupExampleInput" name="name"
                      placeholder="Name" value={this.state.name} onChange={this.handleChange}/>
            </div>
            <div className="form-group row">
              <div className="col-6">
                <input type="number" min="0" max="100" className="form-control" id="formGroupExampleInput2"
                placeholder="Age" name="age" value={this.state.age} onChange={this.handleChange}/>
              </div>
              <div className="col-6">
                <select className="form-control" name="gender" onChange={this.handleChange}>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>

              </div>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" id="formGroupExampleInput3"
                      placeholder="Locations" name="location" value={this.state.location} onChange={this.handleChange}/>
            </div>
            <div className="col-12">
              <button className="btn btn-success btn-lg align-self-center col-6" type="button" onClick={this.addCitizen}>Add citizen</button>
            </div>
          </form>
        </div>
        <div className="col-sm-12 col-md-6 p-3">
          <div className="row h-50">
            <div className="row">
              <h3 className="ml-5">Update citizen´s location</h3>
            </div>
            <div className="col-12 m-0">
              <div className="form-group">
                <input type="text" className="form-control" id="formGroupExampleInput" name="citizenIdUpdate"
                        placeholder="Citizen id" value={this.state.citizenIdUpdate} onChange={this.handleChange}/>
              </div>
              <div className="col-12">
                <button className="btn btn-success btn-lg align-self-center col-6" type="button" onClick={this.updateLocation}>Update</button>
              </div>
            </div>
          </div>
          <div className="row h-50 align-items-end">
            <div className="row">
              <h3 className="ml-5">Report mutation</h3>
            </div>
            <div className="col-12 m-0">
              <div className="form-group">
                <input type="text" className="form-control" id="formGroupExampleInput" name="citizenIdMutation"
                        placeholder="Citizen id" value={this.state.citizenIdMutation} onChange={this.handleChange}/>
              </div>
              <div className="form-group">
                <select className="form-control" name="flag" onChange={this.handleChange}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
              <div className="col-12">
                <button className="btn btn-success btn-lg align-self-center col-6" type="button" onClick={this.setFlag}>Update</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Citizens;
