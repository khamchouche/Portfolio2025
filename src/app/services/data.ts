// Fichier: src/app/services/data.ts (Au lieu de data.service.ts)

import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, updateDoc, deleteDoc, DocumentData, CollectionReference, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService { // ⬅️ Le nom de la classe doit rester DataService

  constructor(private firestore: Firestore) { }

  // Méthode générique pour obtenir une collection complète (ex: 'projets')
  getCollection(collectionName: string): Observable<DocumentData[]> {
    const collRef: CollectionReference<DocumentData> = collection(this.firestore, collectionName);
    return collectionData(collRef, { idField: 'id' }); 
  }

  // Méthode pour obtenir un document par son ID
  getDocById(collectionName: string, id: string): Observable<DocumentData> {
    const docRef: DocumentReference<DocumentData> = doc(this.firestore, collectionName, id);
    return docData(docRef, { idField: 'id' })as Observable<DocumentData>;
  }

  // Méthode pour ajouter un nouveau document
  addDoc(collectionName: string, data: any) {
    const collRef = collection(this.firestore, collectionName);
    return addDoc(collRef, data);
  }

  // Méthode pour mettre à jour un document
  updateDoc(collectionName: string, id: string, data: any) {
    const docRef = doc(this.firestore, collectionName, id);
    return updateDoc(docRef, data);
  }

  // Méthode pour supprimer un document
  deleteDoc(collectionName: string, id: string) {
    const docRef = doc(this.firestore, collectionName, id);
    return deleteDoc(docRef);
  }
}