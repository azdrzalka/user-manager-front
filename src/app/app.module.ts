import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatTableModule, MatButtonModule, MatSelectModule, MatIconModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AppMaterialModules } from './material.module';
import { AboutMeComponent } from './about-me/about-me.component';
import { UserService } from './services/user.service';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { UserFormComponent } from './user-form/user-form.component';
import { DeleteComponent } from './delete-dialog/delete-dialog.component';
import { SkillBarComponent } from './skill-bar/skill-bar.component';
import { ResumeService } from './services/resume.service';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about-me', component: AboutMeComponent } 
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    UserFormComponent,
    DeleteComponent,
    SkillBarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule, 
    AppMaterialModules,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService, ResumeService],
  bootstrap: [AppComponent],
  entryComponents: [UserFormComponent, DeleteComponent],

})
export class AppModule { }
