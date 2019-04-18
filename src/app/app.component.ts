import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Produce Net';

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer){
    this.matIconRegistry.addSvgIcon(
      `user-logged-out`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/user-logged-out.svg')
    );
    this.matIconRegistry.addSvgIcon(
      `user-logged-in`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/user-logged-in.svg')
    );
  }
}
