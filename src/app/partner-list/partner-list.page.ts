import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { PartnerService } from '../services/partner.service';

@Component({
  selector: 'app-partner-list',
  templateUrl: './partner-list.page.html',
  styleUrls: ['./partner-list.page.scss'],
})
export class PartnerListPage implements OnInit {
partners;
  constructor(private partnerService: PartnerService, private loadingController: LoadingController) { }

  ngOnInit() {
    
    this.getPartner();
  }


  async getPartner() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Veuillez patientez ...',
    });
    loading.present();
    this.partnerService.GetPartners().subscribe(
      (data) => {
        console.log(data);
        this.partners = data.data;
        loading.dismiss();
      }, (err) => {
        console.log(err);
        loading.dismiss();
      }
    );
  }

}
