import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Agenda, AgendaSchema } from './agenda.model';
import { AgendaService } from './agenda.service';
import { AgendaResolver } from './agenda.resolver';

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: Agenda.name,
				schema: AgendaSchema
			}
		])
	],
	providers: [AgendaService, AgendaResolver]
})
export class AgendaModule {}
