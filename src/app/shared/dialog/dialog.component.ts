import { Component, OnInit } from '@angular/core';
import { DialogService } from './dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit{

  dialogContent = {}
  header = 'Booking';
  visible: boolean = false;

  constructor(private dialogService: DialogService) {

  }
  
  ngOnInit(): void {
    this.dialogService.$dialog.subscribe((res) => {
      console.log(res);
      this.visible = res.status;
      this.header = res.content.header ? res.content.header : this.header;
    });
  }

  showDialog() {
    const dialogContent = {
      status: true,
      content: {}
    }
    this.dialogService.dialogChanges(dialogContent);
  }


}
