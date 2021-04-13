import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './task.entity';
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

    async getTasks(filterDto: GetTaskFilterDto): Promise<Task[]> {
        return this.taskRepository.getTask(filterDto)
    }

    async getTaskById(id: number): Promise<Task> {
        const found = await this.taskRepository.findOne(id)
        if (!found) {
            throw new NotFoundException(`Task with id ${id} not found.`)
        }
        return found
    }

    async getTasksWithFilters(filterDto: GetTaskFilterDto): Promise<Task[]> {
        return await this.getTasks(filterDto)
    }

    async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
        return this.taskRepository.createTask(createTaskDto)
    }

    async deleteTaskById(id: number): Promise<Task> {
        const task = await this.getTaskById(id)
        this.taskRepository.delete(id)
        return task
    }

    async updateTaskStatus(id: number, status: TaskStatus): Promise<Task>{
        const task = await this.getTaskById(id)
        task.status = status
        await task.save()
        return task
    }
}
