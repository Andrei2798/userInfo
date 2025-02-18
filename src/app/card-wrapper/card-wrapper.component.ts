import { Component } from '@angular/core';
import { MoreInfoButtonComponent } from '../more-info-button/more-info-button.component';
import { UserInfoComponent } from '../user-info/user-info.component';

@Component({
  selector: 'app-card-wrapper',
  imports: [MoreInfoButtonComponent, UserInfoComponent],
  templateUrl: './card-wrapper.component.html',
  styleUrl: './card-wrapper.component.scss'
})
export class CardWrapperComponent {

}
