import { NgModule } from '@angular/core';
import { EditPhotoComponent } from './edit-photo/edit-photo';
import { ChooseModalComponent } from './choose-modal/choose-modal';
@NgModule({
	declarations: [EditPhotoComponent,
    ChooseModalComponent],
	imports: [],
	exports: [EditPhotoComponent,
    ChooseModalComponent]
})
export class ComponentsModule {}
