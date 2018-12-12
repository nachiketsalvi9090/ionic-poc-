import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header';
import { CardComponent } from './card/card';
@NgModule({
	declarations: [HeaderComponent,
    HeaderComponent,
    CardComponent],
	imports: [],
	exports: [HeaderComponent,
    HeaderComponent,
    CardComponent]
})
export class ComponentsModule {}
