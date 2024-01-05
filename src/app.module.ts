import { Module } from '@nestjs/common';

import { ScheduleModule } from './modules/schedule/schedule.module';
import { RoomsModule } from './modules/rooms/rooms.module';

@Module({
  imports: [ScheduleModule, RoomsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
