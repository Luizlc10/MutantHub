/*jshint esversion: 6 */
import React from 'react';
import ReactDOM from 'react-dom';
import './dashboard.css';
import Chart from 'chart.js';
import {Doughnut, HorizontalBar} from 'react-chartjs-2';

class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      doughnutData: {
        datasets: [{
          data: [70, 30],
          backgroundColor: [
            'rgba(255,54,23, 0.8)',
            'rgba(0,160,23, 0.8)'
          ],
        }],
        labels: [
          'Infected',
          'Non-infected'
        ]
      },
      horizontalBarData: {
        labels: ["Tooth", "Eye"],
        datasets: [{
            label: 'Type',
            data: [30, 19],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
      }
    };
  }

  componentDidMount(){
    fetch('https://mutanthub.herokuapp.com/reports/report-mutation', {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin':'*',
        'Accept': '*',
        'Content-Type': 'application/json',
      },
      mode: 'cors'
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
      <div className="">
        <h1>Dashboard</h1>
        <div className="row">
          <div className="col-6">
            < Doughnut data={this.state.doughnutData} />
          </div>
          <div className="col-6">
          < HorizontalBar data={this.state.horizontalBarData}/>
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
