import { Ability, AbilityBuilder, AbilityClass, ExtractSubjectType, InferSubjects } from "@casl/ability";
import { Injectable } from "@nestjs/common";
import { User } from "src/auth/user.entity";
import { TaskStatus } from "src/tasks/task-status.enum";
import { Task } from "src/tasks/task.entity";
import { Action } from "./actions.enum";



type Subjects = InferSubjects<typeof Task | typeof User> | 'all';

export type AppAbility = Ability<[Action, Subjects]>;

@Injectable()
export class CaslAbilityFactory {
    createForUser(user: User) {
        const { can, cannot, build } = new AbilityBuilder<Ability <[Action, Subjects]> >(Ability as AbilityClass<AppAbility>);

        if (user.id === 1) {
          can(Action.Manage, 'all'); // read-write access to everything
        } else {
          can(Action.Read, 'all'); // read-only access to everything
        }
        can(Action.Create, Task);
        can(Action.Update, Task, { userId: user.id });
        cannot(Action.Delete, Task, { userId: user.id, status: TaskStatus.DONE });

        return build({
          // Read https://casl.js.org/v5/en/guide/subject-type-detection#use-classes-as-subject-types for details
          detectSubjectType: item => item.constructor as ExtractSubjectType<Subjects>
        });
      }
}
