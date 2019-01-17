import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-protocolos',
  templateUrl: './modal-protocolos.component.html',
  styleUrls: ['./modal-protocolos.component.css']
})
export class ModalProtocolosComponent implements OnInit {
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  filePath: string;
  downloadStatus = true;

  formProto = new FormGroup({
    proto_name: new FormControl(),
    proto_file: new FormControl(),
    proto_url: new FormControl()
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private storage: AngularFireStorage
  ) { }

  ngOnInit() {
    console.log(this.downloadStatus);
  }

  uploadFile(event) {
    let r = Math.random().toString(36).substring(7);
    const file = event.target.files[0];
    this.filePath = 'uploads/protocolo_' + this.data.pacienteId + r;
    const fileRef = this.storage.ref(this.filePath);
    const task = this.storage.upload(this.filePath, file);
    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = fileRef.getDownloadURL();
        this.getUrl();
      }
      )
    )
      .subscribe()
  }

  getUrl() {
    let ref = this.storage.ref(this.filePath);
    ref.getDownloadURL()
      .subscribe(resp => {
        this.formProto.patchValue({ proto_url: resp, proto_file: this.filePath })
        this.downloadStatus = false;
      })
  }

}
