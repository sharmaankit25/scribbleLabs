import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './task.entity';
import { User } from 'src/auth/user.entity';
import { TaskStatus } from './task-status.enum'
import { v1 as uuid} from 'uuid'
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(TaskRepository)
        private taskRepository: TaskRepository
    ) {}

    async getTasks(filterDto: GetTaskFilterDto, user: User): Promise<Task[]> {
        return this.taskRepository.getTask(filterDto, user)
    }

    async getTaskById(id: number, user: User): Promise<Task> {
        const found = await this.taskRepository.findOne({ where: { id, userId: user.id } })
        if (!found) {
            throw new NotFoundException(`Task with id ${id} not found.`)
        }
        return found
    }

    async createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task> {
        return this.taskRepository.createTask(createTaskDto, user)
    }

    async deleteTaskById(id: number, user: User): Promise<Task> {
        const task = await this.getTaskById(id, user)
        this.taskRepository.delete({ id, userId: user.id })
        return task
    }

    async updateTaskStatus(id: number, status: TaskStatus, user: User): Promise<Task>{
        const task = await this.getTaskById(id, user)
        task.status = status
        await task.save()
        return task
    }
}
