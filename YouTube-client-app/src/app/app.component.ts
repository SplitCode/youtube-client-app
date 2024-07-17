import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// import { FooterComponent } from './core/components/footer/footer.component';
// import { HeaderComponent } from './core/components/header/header.component';
// import { MainPageComponent } from './youtube/pages/main-page/main-page.component';
import { CoreModule } from './core/core.module';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RouterOutlet, CoreModule],
})
export class AppComponent {
  title = 'YouTube-client-app';
}
