import { Component, OnInit } from '@angular/core';
import { FinanceService } from '../services/finance.service';

@Component({
  selector: 'app-prefinancement-management',
  templateUrl: './prefinancement-management.page.html',
  styleUrls: ['./prefinancement-management.page.scss'],
})
export class PrefinancementManagementPage implements OnInit {
  recuPreFinancing = [];
  montantRecu = 0;
  octPreFinancing = [];
  montantOctroye = 0;
  anPreFinancing = [];
  rejectPreFinancing = [];
  constructor(private financeService: FinanceService) { }

  ngOnInit() {
    this.getPrefinances();
  }

  getPrefinances() {
    this.financeService.GetPrefinancement().subscribe(
      (data) => {
        console.log(data);
        data.data.forEach(element => {
          if (element.etat === 'prefinancement recu') {
            this.recuPreFinancing.push(element);
          } else if (element.etat === 'prefinancement octroyer') {
            this.octPreFinancing.push(element);
          } else if (element.etat === 'prefinancement octroyer') {
            this.octPreFinancing.push(element);
          }
          
        });

        this.recuPreFinancing.forEach(element => {
          this.montantRecu += element.montant;
        });
    
        this.octPreFinancing.forEach(element => {
          this.montantOctroye += element.montant;
        });
      }, (err) => {
        console.log(err);
        
      }
    );
  }

}
