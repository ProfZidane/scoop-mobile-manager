import { Component, OnInit } from '@angular/core';
import { FinanceService } from '../services/finance.service';

@Component({
  selector: 'app-financement-management',
  templateUrl: './financement-management.page.html',
  styleUrls: ['./financement-management.page.scss'],
})
export class FinancementManagementPage implements OnInit {
recuFinancing = [];
montantRecu = 0;
octFinancing = [];
montantOctroye = 0;
anFinancing = [];
rejectFinancing = [];
  constructor(private financeService: FinanceService) { }

  ngOnInit() {
    this.getFinances();
  }

  getFinances() {
    this.financeService.GetFinancement().subscribe(
      (data) => {
        console.log(data);
        data.data.forEach(element => {
          if (element.etat === 'financement recu') {
            this.recuFinancing.push(element);
          } else if (element.etat === 'financement octroyer') {
            this.octFinancing.push(element);
          } else if (element.etat === 'financement octroyer') {
            this.octFinancing.push(element);
          }
          
        });

        this.recuFinancing.forEach(element => {
          this.montantRecu += element.montant;
        });
    
        this.octFinancing.forEach(element => {
          this.montantOctroye += element.montant;
        });

        console.log(this.recuFinancing);
        console.log(this.octFinancing);
        
      }, (err) => {
        console.log(err);
        
      }
    );

    
    

  }
}
