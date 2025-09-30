import { Component, OnInit } from '@angular/core';

import { DataService, Pets } from '../../services/data';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.page.html',
  styleUrls: ['./pet-detail.page.scss'],
})
export class PetDetailPage implements OnInit {

  pet: Pets = {
    
  }

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService ,
    private router: Router,
    private loadingController: LoadingController,
    private toastController: ToastController
  ) { }

  async loadItem() {
    const loading = await this.loadingController.create({
      message: 'Carregando pet...'
    })

    await loading.present()

    this.dataService.getItemPet(this.id).subscribe(res => {
      loading.dismiss()

      if(res) {
        this.pet = res
      } else {
        this.presentToast('Pet não encontrado!', 'danger')
        this.router.navigateByUrl('/home')
      }
    }, err => {
      loading.dismiss()
      this.presentToast('Erro ao carregar Pet', 'danger')
      this.router.navigateByUrl('/home')
    })
  }

  async presentToast(message: string, color = 'primary') {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color
    })
    toast.present()
  }

  ngOnInit() {
  }

}
