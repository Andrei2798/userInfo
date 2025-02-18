import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserInfoComponent } from './user-info/user-info.component';
import { MoreInfoButtonComponent } from './more-info-button/more-info-button.component';
import { CardWrapperComponent } from './card-wrapper/card-wrapper.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserInfoComponent, MoreInfoButtonComponent, CardWrapperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'user';
}
