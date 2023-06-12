import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatComponent implements OnInit {
  showFiller = false;
  constructor() { };
  items : any
  

  ngOnInit(): void {
    this.items = Array.from({ length: 200 }).map((_, i) => `Hi Anju #${i}`);
  }

}
