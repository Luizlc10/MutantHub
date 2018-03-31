/*jshint esversion: 6 */
import React from 'react';
import './citizens.css';

class Citizens extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-12 col-md-6 p-3">
          <p>Hello</p>
          <img className="mb-3" src="user-f.png" height="200"/>
          <form>
            <div className="form-group">
              <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input"/>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
              <label className="form-check-label" for="inlineRadio1">1</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
              <label className="form-check-label" for="inlineRadio2">2</label>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" id="formGroupExampleInput3" placeholder="Another input"/>
            </div>
            <button className="btn btn-primary btn-lg btn-block"type="submit">Salvar email</button>
          </form>
        </div>
        <div className="col-sm-12 col-md-6 p-3">
          hello
        </div>
      </div>
    );
  }
}

export default Citizens;
