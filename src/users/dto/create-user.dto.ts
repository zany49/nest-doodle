import { IsEnum, IsNotEmpty, IsString, MaxLength,  } from "class-validator";
import { Role } from "src/schemas/user.schema";

export class CreateUserDto {
    @IsString()
    @MaxLength(50)
    @IsNotEmpty()
   readonly userName:string;

   @IsString()
   @IsNotEmpty()
   email:string;

   @IsString()
   @MaxLength(16)
   @IsNotEmpty()
   password:string;

   @IsString()
   gender:string;

   @IsEnum(Role)
   role:string;

}
