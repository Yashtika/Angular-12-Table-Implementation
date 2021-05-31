import { Component, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as EventEmitter from 'events';
import { TableFeatureService } from 'src/app/services/table-feature.service';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.scss']
})
export class EditDetailsComponent implements OnInit {
  public editFormGroup: FormGroup;
  constructor(private formbuilder: FormBuilder, public dialog: MatDialog,
              public dialogRef: MatDialogRef<EditDetailsComponent>,
              @Inject(MAT_DIALOG_DATA) public data:any, private tableFeature: TableFeatureService) {

    this.editFormGroup = this.formbuilder.group({
      id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      body: new FormControl('', Validators.required),
    });
    this.editFormGroup.setValue({
      id: data.id,
      name: data.name,
      email: data.email,
      body: data.body
    });
   }

  ngOnInit(): void {
  }

  onClose(){
    this.dialog.closeAll();
  }

  onSubmit(){
  const valuOnSubmit = this.tableFeature.setData(this.editFormGroup.value);
  this.onClose();
  this.tableFeature.userDet.next(valuOnSubmit);
  }
  
}
