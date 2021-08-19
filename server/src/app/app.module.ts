import { Module } from '@nestjs/common';

import { ConfigModule } from 'app/config/config.module';
import { configOptions } from 'app/config/options';

@Module({
	imports: [ConfigModule.register(configOptions)]
})
export class AppModule {}
