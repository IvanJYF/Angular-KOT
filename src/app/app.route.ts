import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminCampComponent } from './admin_camp/adminCamp.component';
import { AdminStudentComponent } from './admin_student/adminStudent.componet';
import { AdminUserComponent } from './admin_user/adminUser.component';
import { CampManagerComponent } from './camp_manager/campManager.component';
import { StudentManagerComponent } from './student_manager/studentManager.component';
import { SeatInfoComponent } from './seat_info/seatInfo.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'adminCamp', component: AdminCampComponent },
    { path: 'adminStu', component: AdminStudentComponent },
    { path: 'adminUser', component: AdminUserComponent },
    { path: 'campManager', component: CampManagerComponent },
    { path: 'stuManager', component: StudentManagerComponent },
    { path: 'seatInfo', component: SeatInfoComponent },
];

// export const appRouting = RouterModule.forRoot(routes);
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}