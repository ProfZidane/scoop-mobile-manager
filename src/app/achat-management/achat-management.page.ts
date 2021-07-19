import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { SalesService } from '../services/sales.service';
Chart.register(...registerables);
@Component({
  selector: 'app-achat-management',
  templateUrl: './achat-management.page.html',
  styleUrls: ['./achat-management.page.scss'],
})
export class AchatManagementPage implements OnInit {
  @ViewChild('lineCanvas') lineCanvas;
  salesSort = [0,0,0,0,0,0,0,0,0,0,0,0];
  processus = false;
  lineChart;
  sales
  achatMontant = 0;
  poids = 0;
  sacs = 0;
  constructor(private salesService: SalesService) { }

  ngOnInit() {
    this.GetSales();
    this.GetSalesByMonth();
  }


  GetSales() {
    const data = {
      date_debut: null,
      date_fin: null
    };
  
    this.salesService.GetHistorySales2(data).subscribe(
      (data) => {
        console.log('sale');
  
        console.log(data);
        this.sales = data.data.length;

        data.data.forEach(element => {
          this.achatMontant += element.montant_total;
          this.poids += element.poids_net;
          this.sacs += element.sacs;
        });

        console.log(this.sales);
      }, (err) => {
        console.log(err);
      }
    );
  }

  GetSalesByMonth() {
    this.processus = false;
    this.salesService.GetSalesByMonth().subscribe(
      (data) => {
        console.log(data);
        const sort = data.data;
  
        console.log(Object.keys(sort));
        const keys = Object.keys(sort);
        keys.forEach(element => {
  
          if (element === 'January') {
            if (sort[element].length > 1) {
              let sum = 0;
              sort[element].forEach(price => {
                sum += price.prix_unitaire;
              });
              this.salesSort[0] = sum / sort[element].length;
            } else {
              this.salesSort[0] = sort[element][0].prix_unitaire;
            }
          } else if (element === 'February') {
            if (sort[element].length > 1) {
              let sum = 0;
              sort[element].forEach(price => {
                sum += price.prix_unitaire;
              });
              this.salesSort[1] = sum / sort[element].length;
            } else {
              this.salesSort[1] = sort[element][0].prix_unitaire;
            }
          } else if (element === 'March') {
            if (sort[element].length > 1) {
              let sum = 0;
              sort[element].forEach(price => {
                sum += price.prix_unitaire;
              });
              this.salesSort[2] = sum / sort[element].length;
            } else {
              this.salesSort[2] = sort[element][0].prix_unitaire;
            }
          } else if (element === "April") {
            if (sort[element].length > 1) {
              let sum = 0;
              sort[element].forEach(price => {
                sum += price.prix_unitaire;
              });
              this.salesSort[3] = sum / sort[element].length;
            } else {
              this.salesSort[3] = sort[element][0].prix_unitaire;
            }
          } else if (element === 'May') {
            if (sort[element].length > 1) {
              let sum = 0;
              sort[element].forEach(price => {
                sum += price.prix_unitaire;
              });
              this.salesSort[4] = sum / sort[element].length;
            } else {
              this.salesSort[4] = sort[element][0].prix_unitaire;
            }
          } else if (element === 'June') {
            if (sort[element].length > 1) {
              let sum = 0;
              sort[element].forEach(price => {
                sum += price.prix_unitaire;
              });
              this.salesSort[5] = sum / sort[element].length;
            } else {
              this.salesSort[5] = sort[element][0].prix_unitaire;
            }
          } else if (element === 'July') {
            if (sort[element].length > 1) {
              let sum = 0;
              sort[element].forEach(price => {
                sum += price.prix_unitaire;
              });
              this.salesSort[6] = sum / sort[element].length;
            } else {
              this.salesSort[6] = sort[element][0].prix_unitaire;
            }
          } else if (element ===  'August') {
            if (sort[element].length > 1) {
              let sum = 0;
              sort[element].forEach(price => {
                sum += price.prix_unitaire;
              });
              this.salesSort[7] = sum / sort[element].length;
            } else {
              this.salesSort[7] = sort[element][0].prix_unitaire;
            }
          } else if (element === 'September') {
            if (sort[element].length > 1) {
              let sum = 0;
              sort[element].forEach(price => {
                sum += price.prix_unitaire;
              });
              this.salesSort[8] = sum / sort[element].length;
            } else {
              this.salesSort[8] = sort[element][0].prix_unitaire;
            }
          } else if (element === 'October') {
            if (sort[element].length > 1) {
              let sum = 0;
              sort[element].forEach(price => {
                sum += price.prix_unitaire;
              });
              this.salesSort[9] = sum / sort[element].length;
            } else {
              this.salesSort[9] = sort[element][0].prix_unitaire;
            }
          } else if (element === 'November') {
            if (sort[element].length > 1) {
              let sum = 0;
              sort[element].forEach(price => {
                sum += price.prix_unitaire;
              });
              this.salesSort[10] = sum / sort[element].length;
            } else {
              this.salesSort[10] = sort[element][0].prix_unitaire;
            }
          } else if (element === 'December') {
            if (sort[element].length > 1) {
              let sum = 0;
              sort[element].forEach(price => {
                sum += price.prix_unitaire;
              });
              this.salesSort[11] = sum / sort[element].length;
            } else {
              this.salesSort[11] = sort[element][0].prix_unitaire;
            }
          }
  
        });
  
        console.log(this.salesSort);
        this.yourCustomFunctionName(this.salesSort);
        this.processus = true;
      }, (err) => {
        console.log(err);
        this.processus = false;
      }
    );
  }

  yourCustomFunctionName(data_table) {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {

      type: 'bar',
      data: {
          labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
          datasets: [
              {
                  label: 'Prix d\'achat',
                  backgroundColor: 'rgba(75,192,192,0.4)',
                  borderColor: 'rgba(75,192,192,1)',

                  data: data_table,
              }
          ]
      }
  });
}
}
