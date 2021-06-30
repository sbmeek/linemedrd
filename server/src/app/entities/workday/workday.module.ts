import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Workday, WorkdaySchema } from './workday.model';
import { WorkdayService } from './workday.service';
import { WorkdayResolver } from './workday.resolver';

@Module({
	imports: [
		MongooseModule.forFeature([{ name: Workday.name, schema: WorkdaySchema }])
	],
	providers: [WorkdayService, WorkdayResolver]
})
export class WorkdayModule {}
