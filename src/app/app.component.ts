import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  // This is to import to AppComponent
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
@NgModule({
  declarations: [
    CoursesComponent // Declare CoursesComponent in the AppModule
  ],
  imports: [
    BrowserModule // Other modules if needed
  ],
  bootstrap: [AppComponent], // Bootstrap your root component here if needed
})
export class AppComponent {
  title = 'My First Angular App!';
}
