import { PartnerService } from './../services/partner.service';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { FinanceService } from '../services/finance.service';
import { AlertController } from '@ionic/angular';
import { SalesService } from '../services/sales.service';
Chart.register(...registerables);
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss'],
})
export class MainPagePage implements OnInit {
userConnected;
@ViewChild('lineCanvas') lineCanvas;
  lineChart;
  finances;
  prefinances;
  financesEnAttente;
  sales;
  partners;
  salesSort = [0,0,0,0,0,0,0,0,0,0,0,0];
  processus = false;
  constructor(private router: Router, private financeService: FinanceService, private authService: AuthService,
              public alertController: AlertController, private salesService: SalesService, private partnerService: PartnerService,
              private ngZone: NgZone) { }

  ngOnInit() {
    this.userConnected = JSON.parse(localStorage.getItem('userData'));
    this.GetFinances();
    this.GetPrefinancements();
    
    setInterval( () => {
      this.GetFinancementEnAttente();
    }, 5000);
    
    
    this.GetSales();
    this.GetPartners();
    // this.GetSalesByMonth();
  }
  


  ngAfterViewInit() {
    /* setTimeout( () => {
        this.yourCustomFunctionName();
    }, 5500); */
    // this.yourCustomFunctionName();

  }

  Logout() {
    if (this.authService.Logout()) {
      this.router.navigateByUrl('/');
    }
  }

  reload() {
    // window.location.reload();
    // window.location.assign('/');
    // this.salesSort = [0,0,0,0,0,0,0,0,0,0,0,0];
    // this.lineChart.destroy();
    this.prefinances = 0;
    this.finances = 0;
    this.sales = 0;
    this.partners = 0;
    this.processus = false;
    this.financesEnAttente = 0;
    this.ngOnInit();
  }


  goToRecapFinance() {
    this.router.navigateByUrl('financement-management');
  }

  goToRecapPartner() {
    this.router.navigateByUrl('partner-list');
  }

  goToRecapPrefinance() {
    this.router.navigateByUrl('prefinancement-management');
  }

  goToRecapSale() {
    this.router.navigateByUrl('achat-management');
  }


  goToListFinance() {
    this.router.navigateByUrl('finance-no-valided-page');
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

GetFinances() {
  this.financeService.GetFinancement().subscribe(
    (data) => {
      console.log(data);
      this.finances = data.data.length;
      console.log(this.finances);

    }, (err) => {
      console.log(err);
    }
  );
}

GetPrefinancements() {
  this.financeService.GetPrefinancement().subscribe(
    (data) => {
      console.log(data);
      this.prefinances = data.data.length;
      console.log(this.prefinances);

    }, (err) => {
      console.log(err);
    }
  );
}


GetFinancementEnAttente() {
    this.financeService.GetFinancementEnAttente().subscribe(
      (data) => {
        console.log(data);
        
        this.financesEnAttente = data.data.length;
          console.log(this.financesEnAttente);
        
      }, (err) => {
        console.log(err);
      }
    );
  
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
      console.log(this.sales);
    }, (err) => {
      console.log(err);
    }
  );
}


GetPartners() {
  this.partnerService.GetPartners().subscribe(
    (data) => {
      console.log(data);
      this.partners = data.data.length;
      console.log(this.partners);

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

async presentAlertConfirm() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'ATTENTION',
    message: 'Voulez-vous vraiment vous déconnectez ?',
    buttons: [
      {
        text: 'Non',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: non');
        }
      }, {
        text: 'Oui',
        handler: () => {
          this.Logout();
          // console.log('Confirm Okay');
        }
      }
    ]
  });

  await alert.present();
}

}
