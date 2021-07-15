import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Record, RecordSchema } from './record.model';
import { RecordService } from './record.service';
import { RecordResolver } from './record.resolver';

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: Record.name,
				schema: RecordSchema
			}
		])
	],
	providers: [RecordService, RecordResolver]
})
export class RecordModule {}
