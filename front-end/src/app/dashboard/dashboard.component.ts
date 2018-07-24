import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../services/data.service';
import { Scores } from '../model/scores';
import { query } from '@angular/core/src/animation/dsl';
import { PieChartConfig } from '../model/piechart-config';

import { Chart } from 'chart.js';
import 'rxjs/add/operator/map';
import { Candidate } from '../model/candidate';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // Charts
  title = 'Reusable charts sample';
  scores: Scores[];
  newScore: Scores;
  searchCriteria: string;
  recruiter_id: string;
  recruiter_name: string;
  recruiterId: string;
  recruiterName: string;

  chart = [];

  constructor(private router: Router, private route: ActivatedRoute, private dataService: DataService) {
    const url = location.host.split(':');
    const domain = url[0];
    this.route.params.subscribe(params => this.recruiter_name = params.name);
    this.route.params.subscribe(params => this.recruiter_id = params.id);
    if (!sessionStorage.getItem('RecruiterName')) {
      sessionStorage.setItem('RecruiterId', this.recruiter_id);
      sessionStorage.setItem('RecruiterName', this.recruiter_name);
    }
  }

  ngOnInit() {
    this.recruiterName = sessionStorage.getItem('RecruiterName');
    this.newScore = Scores.CreateDefault();
    this.searchCriteria = "candid_id";

    this.dataService.scoreApi().subscribe(res => {
      let data = []
      // console.log('candid_id -' + res.map(res => res.candid_id));
      // console.log('score' + res.map(res => res.score));
      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: [],
          datasets: [
            // {
            //   data: res.map(res=>res.candid_id),
            //   borderColor: '#3cba9f',
            //   fill: false
            // },
            {
              data: res.map(res => res.score),
              borderColor: '#ffcc00',
              fill: false
            },
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'candid_name'
              }
            }],
            yAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'score'
              }
            }]
          }
        }
      })
    })
  }
}

  //Piechart1 Data & Config
    // this.data1 = [['Task1', 'Hours per Day'],

    // ['Work', 11],
    // ['Eat', 2],
    // ['Commute', 2],
    // ['Watch TV', 2],
    // ['Sleep', 7]]


    //this.data1=data;
    // var columns = Object.keys(Scores.candid_id);
    // var data1 = Sc.map(function (result) {
    //   var tableRow = [];
    //   columns.forEach(function (col) {
    //     tableRow.push(result[col]);
    //   });
    //   return tableRow;
    // });




    // //Piechart2 Data & Config
    // this.data2 = [['Task', 'Hours per Day'],
    // ['Work', 11],
    // ['Eat', 2],
    // ['Commute', 2],
    // ['Watch TV', 2],
    // ['Sleep', 7]]

    // this.config2 = new PieChartConfig('My Daily Activities at 30 years old', 0.4);
    // this.elementId2 = 'myPieChart2';

    // getScore(score: Scores) {
    //   this.dataService.getScores(this.searchCriteria)
    //     .subscribe(
    //       data => {
    //         this.scores = [];
    //         data.forEach(
    //           element => {
    //             var newScore = new Scores(
    //               element.candid_id,
    //               element.test_id,
    //               element.correct_answer,
    //               element.score);
    //             this.scores.push(newScore);
    //           })
    //       });
    // }

    //   // this.data1 = data;
    //   // console.log('data log1: ' + this.data1);
    //   // this.config1 = new PieChartConfig('My Daily Activities at 20 years old', 0.4);
    //   // this.elementId1 = 'myPieChart1';
    //   // console.log('data log2: ' + this.data1);      //let jmap = JSON.stringify(res);
    //   //   console.log(jmap)
    //   // let js =
    //   //   [{ _id: "5a9684028bc5088d24769be8", candid_id: "5a9683e722bdb78d2557a83b", test_id: "5a8a90f7d6c1f4189b2b78f3", score: "5 / 8" }]
    //   // let temp_min = res[''].map(res => res.temp_min);
    //   // let allScores =res.map( res => res.score);

    //   //  let weatherDates = []
    //   //  alldates.forEach((res) => {
    //   //      let jsdate = new Date(res * 1000)
    //   //      weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }))
    // })



    //   var data= new Array();
    //   data.push(['candid_id', 'score']);
    //   for (var i in res) {
    //     var id = res[i].candid_id;
    //     var score = res[i].score;
    //     var row = new Array();
    //     row.push(id);
    //     row.push(score);
    //     data.push(row);
    //   }