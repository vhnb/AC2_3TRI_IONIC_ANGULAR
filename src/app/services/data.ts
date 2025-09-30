import { Injectable } from '@angular/core';

import { Firestore, collection, doc, collectionData, docData, addDoc, updateDoc, deleteDoc, query, orderBy } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

export interface Pets {
  id?: string,
  name: string,
  specie: string,
  race: string,
  age: number,
  obs: string
}

export interface Caregivers {
  id?: string,
  name: string,
  phone: number,
  exp: number,
  skills: string
}

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(private firestore: Firestore) {}

  getItemsPets(): Observable<Pets[]> {
    const itemsCollectionsRef = collection(this.firestore, 'pets')
    const q = query(itemsCollectionsRef, orderBy('createdAt', 'desc'))
    return collectionData(q, { idField: 'id' }) as Observable<Pets[]>
  }
  getItemPet(id: string): Observable<Pets | undefined> {
    const itemDocRef = doc(this.firestore, `pets/${id}`)
    return docData(itemDocRef, { idField: 'id' }) as Observable<Pets | undefined>
  }

  getItemsCaregivers(): Observable<Caregivers[]> {
    const itemsCollectionsRef = collection(this.firestore, 'caregivers')
    const q = query(itemsCollectionsRef, orderBy('createdAt', 'desc'))
    return collectionData(q, { idField: 'id' }) as Observable<Caregivers[]>
  }
  getItemsCaregiver(id: string): Observable<Caregivers | undefined> {
    const itemDocRef = doc(this.firestore, `caregivers/${id}`)
    return docData(itemDocRef, { idField: 'id' }) as Observable<Caregivers | undefined>
  }

  addPet(pet: Pets) {
    const itemsCollectionsRef = collection(this.firestore, 'pets')
    return addDoc(itemsCollectionsRef, { ...pet, createdAt: Date.now() })
  }
  addCaregiver(caregiver: Caregivers) {
    const itemsCollectionsRef = collection(this.firestore, 'caregivers')
    return addDoc(itemsCollectionsRef, { ...caregiver, createdAt: Date.now() })
  }

  updatePet(pet: Pets) {
    const itemDocRef = doc(this.firestore, `pets/${pet.id}`)
    return updateDoc(itemDocRef, { name: pet.name, specie: pet.specie, race: pet.race, age: pet.age, obs: pet.obs })
  }
  updateCaregiver(caregiver: Caregivers) {
    const itemDocRef = doc(this.firestore, `caregivers/${caregiver.id}`)
    return updateDoc(itemDocRef, { name: caregiver.name, phone: caregiver.phone, exp: caregiver.exp, skills: caregiver.skills })
  }

  deletePet(id: string) {
    const itemDocRef = doc(this.firestore, `pets/${id}`)
    return deleteDoc(itemDocRef)
  }
  deleteCaregiver(id: string) {
    const itemDocRef = doc(this.firestore, `caregivers/${id}`)
    return deleteDoc(itemDocRef)
  }
}
