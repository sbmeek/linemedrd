import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Specialties, SpecialtiesSchema } from './specialties.model';
import { SpecialtiesService } from './specialties.service';
import { SpecialtiesResolver } from './specialties.resolver';

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: Specialties.name, schema: SpecialtiesSchema }
		])
	],
	providers: [SpecialtiesService, SpecialtiesResolver]
})
export class SpecialtiesModule {}
