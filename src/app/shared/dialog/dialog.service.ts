import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Dialog } from './dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  dialogUpdates = new BehaviorSubject<Dialog>({status: false, content: {}});
  $dialog = this.dialogUpdates.asObservable();

  constructor() { }

  dialogChanges(dialog: Dialog) {
    this.dialogUpdates.next({
      status: dialog.status,
      content: dialog.content
    });
  }

}
