import { Component, OnInit } from '@angular/core';

import { DataService, Pets, Caregivers } from '../services/data';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  pets: Pets[] = []
  caregivers: Caregivers[] = []

  constructor(
    private dataService: DataService,
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.loadPets()
    this.loadCaregivers()
  }

  loadPets() {
    this.dataService.getItemsPets().subscribe((res: Pets[]) => {
      this.pets = res
    })
  }
  loadCaregivers() {
    this.dataService.getItemsCaregivers().subscribe((res: Caregivers[]) => {
      this.caregivers = res
    })
  }

  addPet() {
    this.router.navigateByUrl('/pet-detail')
  }
  addCaregiver() {
    this.router.navigateByUrl('/caregiver-detail')
  }

  updatePet(pet: Pets) {
    this.router.navigateByUrl(`/pet-detail/${pet.id}`)
  }
  updateCaregivers(caregiver: Caregivers) {
    this.router.navigateByUrl(`/caregiver-detail/${caregiver.id}`)
  }

  async deletePet(id: string) {
    const alert = await this.alertController.create({
      header: 'Confirmar exclusão do pet',
      message: 'Tem certeza que deseja excluir esse pet?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'Excluir',
          handler: () => {
            this.dataService.deletePet(id)
          }
        }
      ]
    })
    await alert.present()
  }
  async deleteCaregiver(id: string) {
    const alert = await this.alertController.create({
      header: 'Confirmar exclusão do cuidador',
      message: 'Tem certeza que deseja excluir esse cuidador?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'Excluir',
          handler: () => {
            this.dataService.deleteCaregiver(id)
          }
        }
      ]
    })
    await alert.present()
  }
}
