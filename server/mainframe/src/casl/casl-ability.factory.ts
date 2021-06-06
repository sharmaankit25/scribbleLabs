import {
  Ability,
  AbilityBuilder,
  AbilityClass,
  ExtractSubjectType,
  InferSubjects,
} from '@casl/ability'
import { Injectable } from '@nestjs/common'
import { AuthService } from 'src/auth/auth.service'
import { User } from 'src/auth/user.entity'
import { TaskStatus } from 'src/tasks/task-status.enum'
import { Task } from 'src/tasks/task.entity'
import { Action } from './actions.enum'

type Subjects = InferSubjects<typeof Task | typeof User> | 'all'

export type AppAbility = Ability<[Action, Subjects]>

@Injectable()
export class CaslAbilityFactory {
  createForUser(user: User, permissions: string[]) {
    const { can, cannot, build } = new AbilityBuilder<
      Ability<[Action, Subjects]>
    >(Ability as AbilityClass<AppAbility>)

    if (permissions.includes('TASK_MANAGE')) {
      can(Action.Manage, Task)
    }

    if (permissions.includes('TASK_CREATE')) {
      can(Action.Create, Task)
    }

    if (permissions.includes('TASK_READ')) {
      can(Action.Read, Task)
    }

    if (permissions.includes('TASK_UPDATE')) {
      can(Action.Update, Task, { userId: user.id })
    }

    if (permissions.includes('TASK_DELETE')) {
      can(Action.Delete, Task, { userId: user.id, status: TaskStatus.DONE })
    }

    return build({
      // Read https://casl.js.org/v5/en/guide/subject-type-detection#use-classes-as-subject-types for details
      detectSubjectType: item =>
        item.constructor as ExtractSubjectType<Subjects>,
    })
  }
}
