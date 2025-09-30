import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DataService, Pets } from '../../services/data';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  standalone: true,
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.page.html',
  styleUrls: ['./pet-detail.page.scss'],
  imports: [CommonModule, FormsModule, IonicModule]
})
export class PetDetailPage implements OnInit {

  pet: Pets = {
    name: '',
    specie: '',
    race: '',
    age: 0,
    obs: ''
  }

  itemId: string | null = null
  isNewItem: boolean = true

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router,
    private loadingController: LoadingController,
    private toastController: ToastController
  ) { }

  async loadItem() {
    const loading = await this.loadingController.create({
      message: 'Carregando pet...'
    })

    await loading.present()

    this.dataService.getItemPet(this.itemId!).subscribe(res => {
      loading.dismiss()

      if (res) {
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

  async saveItem() {
    const loading = await this.loadingController.create({
      message: 'Carregando pet...'
    })

    await loading.present()

    if (this.isNewItem) {
      this.dataService.addPet(this.pet).then(() => {
        loading.dismiss()
        this.presentToast('Pet adicionado com sucesso!', 'success')
        this.router.navigateByUrl('/home')
      }, err => {
        loading.dismiss()
        this.presentToast('Erro ao adicionar pet', 'danger')
      })
    } else {
      this.dataService.updatePet(this.pet).then(() => {
        loading.dismiss()
        this.presentToast('Pet atualizado com sucesso!', 'success')
        this.router.navigateByUrl('/home')
      }, err => {
        loading.dismiss()
        this.presentToast('Erro ao atualizar pet', 'danger')
      })
    }
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
    this.itemId = this.route.snapshot.paramMap.get('id')
    if (this.itemId) {
      this.isNewItem = false
      this.loadItem()
    }
  }

}
