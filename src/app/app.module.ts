import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.route';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminCampComponent } from './admin_camp/adminCamp.component';
import { AdminStudentComponent } from './admin_student/adminStudent.componet';
import { AdminUserComponent } from './admin_user/adminUser.component';
import { SeatInfoComponent } from './seat_info/seatInfo.component';
import { StudentManagerComponent } from './student_manager/studentManager.component';
import { CampManagerComponent } from './camp_manager/campManager.component';
import { HeaderComponent } from './header/header.component';
import { DataService } from './serve/data.serve';
import { PageComponent} from './page/page.component';




@NgModule({
  declarations: [
    PageComponent,
    CampManagerComponent,
    StudentManagerComponent,
    SeatInfoComponent,
    AdminUserComponent,
    AdminStudentComponent,
    AdminCampComponent,
    LoginComponent,
    HeaderComponent,
    AppComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    AppRoutingModule,
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
