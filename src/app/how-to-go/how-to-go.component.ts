import { Component } from '@angular/core';

@Component({
  selector: 'how-to-go',
  templateUrl: './how-to-go.component.html',
  styleUrls: ['./how-to-go.component.scss']
})
export class HowToGoComponent {


    logo = [
      {
        image: '../../assets/image/svg/grab.svg'
      },
      {
        image: '../../assets/image/svg/map.svg'
      },
      {
        image: '../../assets/image/svg/waze.svg'
      },
    ]
}
