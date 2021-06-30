import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Days, DaysSchema } from './days.model';
import { DaysService } from './days.service';
import { DaysResolver } from './days.resolver';

@Module({
	imports: [
		MongooseModule.forFeature([{ name: Days.name, schema: DaysSchema }])
	],
	providers: [DaysService, DaysResolver]
})
export class DaysModule {}
