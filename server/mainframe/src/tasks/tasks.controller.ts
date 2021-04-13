import { Body, Controller, Get, Param, Post, Delete, Patch, Query, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { TaskStatusValidationPipe } from 'src/items/pipes/task-status-validation.pipe';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';
import { Task } from './task.entity';
import { TaskStatus } from './task-status.enum'
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService) {}
    // private taskService: TasksService

    @Get()
    getTasks(@Query(ValidationPipe) filterDto: GetTaskFilterDto): Promise<Task[]> {
        return this.taskService.getTasks(filterDto)
    }

    @Post()
    @UsePipes(ValidationPipe)
    createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
        return this.taskService.createTask(createTaskDto)
    }

    @Get('/:id')
    getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
        return this.taskService.getTaskById(id)
    }

    @Delete('/:id')
    deleteTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
        return this.taskService.deleteTaskById(id)
    }

    @Patch('/:id/status')
    updateTaskStatus(@Param('id', ParseIntPipe) id: number, @Body('status', TaskStatusValidationPipe) status: TaskStatus): Promise<Task>{
        return this.taskService.updateTaskStatus(id, status)
    }

}
