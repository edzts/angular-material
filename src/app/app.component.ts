import { Component } from '@angular/core';
import { MatSelectChange } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public readonly languages = [{
    label: 'languages.en',
    value: 'en'
  }, {
    label: 'languages.es',
    value: 'es'
  }];

  public selectedLanguage: string;

  constructor(
    public auth: AuthService,
    private translate: TranslateService
  ) {
    this.selectedLanguage = this.languages[0].value;
    this.translate.setDefaultLang(this.selectedLanguage);
    auth.handleAuthentication();
  }

  public get dashboardVisible(): boolean {
    return this.auth.isAuthenticated();
  }

  public onChangeLanguage(event: MatSelectChange) {
    this.selectedLanguage = event.value;
    this.translate.use(this.selectedLanguage);
  }
}
