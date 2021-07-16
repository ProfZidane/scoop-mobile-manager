import { FinanceService } from './../services/finance.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-finance-no-valided-detail',
  templateUrl: './finance-no-valided-detail.page.html',
  styleUrls: ['./finance-no-valided-detail.page.scss'],
})
export class FinanceNoValidedDetailPage implements OnInit {
details;
  constructor(private router: Router, private navController: NavController, public loadingController: LoadingController, private financeService: FinanceService) {
    if (router.getCurrentNavigation().extras.state) {
      const page = this.router.getCurrentNavigation().extras.state;
      console.log(page);
      this.details = page;
    }
  }

  ngOnInit() {
  }

  pieceJointe(img) {
    console.log(img);
  }

  async validation(id) {
    console.log(id);
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Veuillez patientez ...',
    });
    loading.present();

    this.financeService.setValidation(id).subscribe(
      (success) => {
        console.log(success);
        loading.dismiss();
        this.navController.navigateBack('/main-page');
        // this.navController.back();
      }, (err) => {
        console.log(err);
        loading.dismiss();
      }
    );

  }

}
