import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskRepository } from './task.repository';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { AuthModule } from 'src/auth/auth.module';
import { CaslModule } from 'src/casl/casl.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([TaskRepository]),
        AuthModule,
        CaslModule
    ],
    controllers: [TasksController],
    providers: [TasksService]
})
export class TasksModule {}
