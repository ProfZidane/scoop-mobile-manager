import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
data = {
  email: '',
  password: ''
};
err = {
  state: false,
  text: ''
};
  constructor(public loadingController: LoadingController, private authService: AuthService, private router: Router) {}

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
    return await loading.present();

  }

  async login() {
    this.err.state = false;
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Veuillez patientez...',
    });
    loading.present();
    console.log(this.data);

    this.authService.Login(this.data).subscribe(
      (success) => {
        loading.dismiss();
        console.log(success);
        if (success.user.is_super_manager === 1) {
          localStorage.setItem('mobile-token', success.token);
          localStorage.setItem('userData', JSON.stringify(success.user));
          localStorage.setItem('right', JSON.stringify(success.droits));
          this.router.navigateByUrl('main-page');
        } else {
          this.err.state = true;
          this.err.text = "Vous n'êtes pas autorisé !";
        }
        
      }, (err) => {
        this.err.state = true;
        if (err.status === 500 || err.status === 0) {
          this.err.text = "Une erreur est survenue. Veuillez réessayez plus tard!";
        }
        console.log(err);
        loading.dismiss();
      }
    );
  }
}
