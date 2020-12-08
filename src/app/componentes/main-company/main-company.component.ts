import { Component, OnInit } from '@angular/core';
import *as Chart from 'chart.js'; 

@Component({
  selector: 'app-main-company',
  templateUrl: './main-company.component.html',
  styleUrls: ['./main-company.component.css']
})
export class MainCompanyComponent implements OnInit {

  canvas: any;
  canvas2: any;
  canvas3: any;
  canvas4: any;
  ctx: any;
  ctx2: any;
  ctx3: any;
  ctx4: any;

  


  constructor() { }

  ngOnInit(): void {

    this.canvas = document.getElementById('myChart');
    this.ctx=this.canvas.getContext('2d');
    this.canvas2 = document.getElementById('myChart2');
     this.ctx2=this.canvas2.getContext('2d');
    this.canvas3 = document.getElementById('myChart3');
    this.ctx3=this.canvas3.getContext('2d');
    this.canvas4 = document.getElementById('myChart4');
    this.ctx4=this.canvas4.getContext('2d');


    Chart.defaults.global.defaultFontFamily = 'Poppins'
    Chart.defaults.global.defaultFontSize = 12
    Chart.defaults.global.defaultFontColor = '#a8a8a8'

    var myChart = new Chart(this.ctx, {
        type: 'line',
        data: {
            labels: ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'],
            datasets: [{
                label: 'Cant. polas vendidas',
                data: [42, 39, 33, 45, 47, 25, 22, 23, 50, 43, 22, 65],
                backgroundColor: [
                    'transparent'
                ],
                borderColor: [
                    '#E1548F',
                    '#E1548F',
                    '#E1548F',
                    '#E1548F',
                    '#E1548F',
                    '#E1548F',
                    '#E1548F',
                    '#E1548F',
                    '#E1548F',
                    '#E1548F'
                ],
                borderWidth: 4,

            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: { display: false },
            tooltips: {
                backgroundColor: "#fff",
                titleFontColor: "#E3D43D",
                bodyFontColor: "#E3D43D",
                enabled: true,
                mode: 'single',
                multiKeyBackground: "#E1548F"
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 20
                }
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        color: "rgba(225, 84, 143, 0.3)",
                    }
                }],
                yAxes: [{
                    gridLines: {
                        color: "rgba(225, 84, 143, 0.3)",
                    }
                }]

            }
        }
    });

    var myChart2 = new Chart(this.ctx2, {
        type: 'line',
        data: {
            labels: ['JUL', 'AGO', 'OCT', 'NOV', 'DIC', 'ENE'],
            datasets: [{
                label: 'Número de visitas',
                data: [42, 60, 70, 50, 30, 40, 70],
                backgroundColor: [
                    'transparent'
                ],
                borderColor: [
                    '#E1548F',
                    '#E1548F',
                    '#E1548F',
                    '#E1548F',
                    '#E1548F',
                    '#E1548F'
                ],
                borderWidth: 4,

            }],
        },
        options: {
            responsive: true,
            legend: { display: false },
            maintainAspectRatio: false,
            tooltips: {
                backgroundColor: "#fff",
                titleFontColor: "#E3D43D",
                bodyFontColor: "#E3D43D",
                enabled: true,
                mode: 'single'
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 20
                }
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        color: "rgba(225, 84, 143, 0.3)",
                    }
                }],
                yAxes: [{
                    gridLines: {
                        color: "rgba(225, 84, 143, 0.3)",
                    }
                }]

            }
        }
    });

    var myChart3 = new Chart(this.ctx3, {
        type: 'bar',
        data: {
            labels: ['jUL','AGO', 'SEP', 'OCT', 'NOV', 'DIC'],
            datasets: [{
                label: 'Número de ganancias',
                data: [42, 39, 33, 45, 47, 25, 0],
                backgroundColor: [
                    'transparent'
                ],
                borderColor: [
                    '#0098f0',
                    '#0098f0',
                    '#0098f0',
                    '#0098f0',
                    '#0098f0',
                    '#0098f0',
                    '#0098f0',
                    '#0098f0',
                    '#0098f0',
                    '#0098f0'
                ],
                borderWidth: 2,

            }],
        },
        options: {
            responsive: true,
            legend: { display: false },
            maintainAspectRatio: false,
            tooltips: {
                backgroundColor: "#fff",
                titleFontColor: "#E3D43D",
                bodyFontColor: "#E3D43D",
                enabled: true,
                mode: 'single'
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 20
                }
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        color: "rgba(0, 152, 240, 0.3)",
                    }
                }],
                yAxes: [{
                    gridLines: {
                        color: "rgba(0, 152, 240, 0.3)",
                    }
                }]

            }
        }
    });

    var myChart4 = new Chart(this.ctx4, {
        type: 'line',
        data: {
            labels: ['JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'],
            datasets: [{
                label: 'Ganancia en pesos',
                data: [42, 39, 33, 45, 47, 25],
                backgroundColor: [
                    'transparent'
                ],
                borderColor: [
                    '#00f2c3',
                    '#00f2c3',
                    '#00f2c3',
                    '#00f2c3',
                    '#00f2c3',
                    '#00f2c3',
                    '#00f2c3',
                    '#00f2c3',
                    '#00f2c3',
                    '#00f2c3'
                ],
                borderWidth: 2,

            }],
        },
        options: {
            responsive: true,
            legend: { display: false },
            maintainAspectRatio: false,
            tooltips: {
                backgroundColor: "#fff",
                titleFontColor: "#E3D43D",
                bodyFontColor: "#E3D43D",
                enabled: true,
                mode: 'single'
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 20
                }
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        color: "rgba(0, 242,195, 0.3)",
                    }
                }],
                yAxes: [{
                    gridLines: {
                        color: "rgba(0, 242,195, 0.3)",
                    }
                }]

            }
        }
    }); 
    
  }

}
