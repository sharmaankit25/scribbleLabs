import { IsEmpty, IsIn, IsNotEmpty, NotEquals, notEquals, ValidateIf } from "class-validator";
export class CreateItemDto {
    @IsNotEmpty()
    readonly name: string;
    readonly description: string;
    readonly qty: number;
  }
