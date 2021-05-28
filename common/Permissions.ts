export enum PermissionsEnum {
    TASK_CREATE = 'TASK_CREATE',
    TASK_READ   = 'TASK_READ',
    TASK_UPDATE = 'TASK_UPDATE',
    TASK_DELETE = 'TASK_DELETE',
    TASK_MANAGE = 'TASK_MANAGE'
}

export const PERMISSIONS = {
    Task: {
        create: PermissionsEnum.TASK_CREATE,
        read: PermissionsEnum.TASK_READ,
        update: PermissionsEnum.TASK_UPDATE,
        delete: PermissionsEnum.TASK_DELETE,
        manage: PermissionsEnum.TASK_MANAGE,
    }
}
