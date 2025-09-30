import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DataService, Caregivers } from '../../services/data';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  standalone: true,
  selector: 'app-pet-detail',
  templateUrl: './caregiver-detail.page.html',
  styleUrls: ['./caregiver-detail.page.scss'],
  imports: [CommonModule, FormsModule, IonicModule]
})
export class CaregiverDetailPage implements OnInit {

  caregiver: Caregivers = {
    name: '',
    phone: 0,
    exp: 0,
    skills: ''
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
      message: 'Carregando cuidadores...'
    })

    await loading.present()

    this.dataService.getItemsCaregiver(this.itemId!).subscribe(res => {
      loading.dismiss()

      if (res) {
        this.caregiver = res
      } else {
        this.presentToast('Cuidador não encontrado!', 'danger')
        this.router.navigateByUrl('/home')
      }
    }, err => {
      loading.dismiss()
      this.presentToast('Erro ao carregar Cuidador', 'danger')
      this.router.navigateByUrl('/home')
    })
  }

  async saveItem() {
    const loading = await this.loadingController.create({
      message: 'Carregando cuidador...'
    })

    await loading.present()

    if (this.isNewItem) {
      this.dataService.addCaregiver(this.caregiver).then(() => {
        loading.dismiss()
        this.presentToast('Cuidador adicionado com sucesso!', 'success')
        this.router.navigateByUrl('/home')
      }, err => {
        loading.dismiss()
        this.presentToast('Erro ao adicionar cuidador', 'danger')
      })
    } else {
      this.dataService.updateCaregiver(this.caregiver).then(() => {
        loading.dismiss()
        this.presentToast('Cuidador atualizado com sucesso!', 'success')
        this.router.navigateByUrl('/home')
      }, err => {
        loading.dismiss()
        this.presentToast('Erro ao atualizar cuidador', 'danger')
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
