import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
    exports: [
        MatButtonModule,
        MatTableModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatPaginatorModule,
        MatToolbarModule,
        MatProgressBarModule,
        MatSelectModule,
        MatSortModule,
        MatTabsModule,
        CdkTableModule,
    ],
    declarations: []
})
export class AppMaterialModules { }
