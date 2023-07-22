import { Module } from '@nestjs/common';
import { SubscribersService } from './subscribers.service';
import { SubscribersController } from './subscribers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SubscriberSchema } from './schemas/subscriber.schema';
import { Subscriber } from 'rxjs';

@Module({
  controllers: [SubscribersController],
  providers: [SubscribersService],
  imports: [MongooseModule.forFeature([{ name: Subscriber.name, schema: SubscriberSchema }])],
})
export class SubscribersModule { }
