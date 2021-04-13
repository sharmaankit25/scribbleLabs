import { Repository, EntityRepository } from "typeorm";
import { Task } from "./task.entity";
import { CreateTaskDto } from "./dto/create-task.dto";
import { TaskStatus } from './task-status.enum'
import { GetTaskFilterDto } from "./dto/get-task-filter.dto";
// import { User } from "src/auth/user.entity";
import { Logger, InternalServerErrorException } from "@nestjs/common";

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
    private logger = new Logger('TaskRepository')
    async createTask(
        createTaskDto: CreateTaskDto​​
        ): Promise<Task>{
        const { title, description } = createTaskDto
        const task = new Task()
        task.title = title
        task.description = description
        task.status = TaskStatus.OPEN
        // task.user = user
        await task.save()
        return task
    }

    async getTask(filterDto: GetTaskFilterDto): Promise<Task[]> {
        const { status, search } = filterDto
        const query = this.createQueryBuilder('task')
        if (status) {
            query.andWhere('task.status = :status', { status })
        }

        if(search) {
            query.andWhere('task.title LIKE :search or task.description LIKE :search', { search:`%${search}%` })
        }

        try {
            return await query.getMany()
        } catch (error) {
            this.logger.error(`Failed to get task for user  Filters ${JSON.stringify(filterDto)}`, error.stack)
            throw new InternalServerErrorException()
        }
    }
}
