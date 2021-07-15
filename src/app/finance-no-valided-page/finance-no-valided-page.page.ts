import { FinanceService } from './../services/finance.service';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-finance-no-valided-page',
  templateUrl: './finance-no-valided-page.page.html',
  styleUrls: ['./finance-no-valided-page.page.scss'],
})
export class FinanceNoValidedPagePage implements OnInit {
finances;
  constructor(private financeService: FinanceService, public loadingController: LoadingController, private navController: NavController) { }

  ngOnInit() {
    this.getFinancingNotValided();
  }

  ngAfterViewChecked() {
    console.log('arp');
  }

  


  async getFinancingNotValided() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Veuillez patientez ...',
    });
    loading.present();
    this.financeService.GetFinancementEnAttente().subscribe(
      (data) => {
        console.log(data);
        this.finances = data.data;
        loading.dismiss();
      }, (err) => {
        console.log(err);
        loading.dismiss();
      }
    );
  }


  getDetail(finance) {
    console.log(this.finances);
    this.navController.navigateForward('finance-no-valided-detail', { state: finance });
  }

}
