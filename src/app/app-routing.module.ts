import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserDetailComponent} from "src/app/components/user-detail/user-detail.component";
import {FeatureUsersListComponent} from "src/app/components/feature-users-list/feature-users-list.component";


const routes: Routes = [
  {path: '', component: FeatureUsersListComponent},
  {path: 'user/:id', component: UserDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
