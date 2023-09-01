import { Component, OnInit } from '@angular/core';
import { TranslationService } from '@transifex/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Transifex_Demo';

  constructor(private translationService: TranslationService) {
    translationService.init({
    token: '1/43488df95a4116fc44b4c6266cc299d4c6fd51e7',
});
  }

  async ngOnInit() {
    const resp = await this.translationService.getLanguages();
    console.log("resp from transifex API",resp)
  }
}
