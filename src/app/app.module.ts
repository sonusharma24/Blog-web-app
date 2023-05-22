import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { CategoryNavBarComponent } from './layouts/category-nav-bar/category-nav-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { TermAndConditionComponent } from './pages/term-and-condition/term-and-condition.component';
import { AboutComponent } from './pages/about/about.component';
import { SubsscriptionFormComponent } from './subsscription-form/subsscription-form.component';
import { CommentListComponent } from './comments/comment-list/comment-list.component';
import { CommentFormComponent } from './comments/comment-form/comment-form.component';
import { PostCardComponent } from './layouts/post-card/post-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CategoryNavBarComponent,
    HomeComponent,
    ContactUsComponent,
    SinglePostComponent,
    SingleCategoryComponent,
    TermAndConditionComponent,
    AboutComponent,
    SubsscriptionFormComponent,
    CommentListComponent,
    CommentFormComponent,
    PostCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
