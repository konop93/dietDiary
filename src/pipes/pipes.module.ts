import { NgModule } from '@angular/core';
import { DishesPipe } from './dishes/dishes';
import { LimitToPipe } from './limit-to/limit-to';
@NgModule({
	declarations: [DishesPipe,
    LimitToPipe],
	imports: [],
	exports: [DishesPipe,
    LimitToPipe]
})
export class PipesModule {}
