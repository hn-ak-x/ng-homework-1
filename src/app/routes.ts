import {HomeComponent} from "./components/home/home.component";
import {UsersComponent} from "./components/users/users.component";
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {Routes} from "@angular/router";
import {PostsComponent} from "./components/posts/posts.component";

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'users', component: UsersComponent,
    children: [
      {path: ':id', component: UserDetailsComponent}
    ]},
  {path: 'posts', component: PostsComponent}
]
