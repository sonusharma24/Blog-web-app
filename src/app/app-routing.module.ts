import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { TermAndConditionComponent } from './pages/term-and-condition/term-and-condition.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

const routes: Routes = [
  {
path:"",
component:HomeComponent
  },
  {
path:"category",
component:SingleCategoryComponent
  },
  {
path:"post",
component:SinglePostComponent
  },
  {
path:"about",
component:AboutComponent
  },
  {
path:"term-conditions",
component:TermAndConditionComponent
  },
  {
path:"contact",
component:ContactUsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
