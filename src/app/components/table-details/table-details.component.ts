import { Component, OnInit, ViewChild } from '@angular/core';
import { TableFeatureService } from 'src/app/services/table-feature.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditDetailsComponent } from '../edit-details/edit-details.component';

@Component({
  selector: 'app-table-details',
  templateUrl: './table-details.component.html',
  styleUrls: ['./table-details.component.scss']
})
export class TableDetailsComponent implements OnInit {
  public editableTableData: any =[];
  public editMode: boolean =false;
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['id','name','email','body', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;
  pageSizeOpt = [];
  constructor(private tableService: TableFeatureService, private dialog: MatDialog) { 
    this.tableService.userDet.subscribe(response =>{
      this.tableFeatures(response);
    })
  }

  ngOnInit(): void {
    this.fetchTableDetails();
  }
  fetchTableDetails(){  
    this.tableService.getUserDetails().subscribe((res: any) => {
      console.log(res);
      this.tableFeatures(res);
      this.pageSizeOpt = [5, 10, 25, 100, res.length];
    },
    (err: any) => {
      console.log(err);
    })
  }

  tableFeatures(resp){
    this.listData = new MatTableDataSource(resp);
    this.listData.sort = this.sort;
    this.listData.paginator = this.paginator;
    this.listData.filterPredicate = (data, filter) => {
      return this.displayedColumns.some(ele => {
        return ele != 'actions' && ele != 'id' && data[ele].toLowerCase().indexOf(filter) != -1;
      });
    };
    this.tableService.sendUserDetails(resp);
  }
  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }
  
  edit(){ //button click
    this.editMode = true;
  }
  onEdit(row){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = row;
    console.log(dialogConfig.data);
    this.dialog.open(EditDetailsComponent,dialogConfig);
    console.log('row', row);
  }
  cancel(){
    this.editMode = false;
  }
}
