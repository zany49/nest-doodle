import { Prop, SchemaFactory,Schema } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export enum Role {
     User = "user",
     Admin = "admin",
  }

  
@Schema()
export class Users{
@Prop({ required: true })
userName:string;

@Prop({ required: true })
email:string;

@Prop({ required: true })
password:string;

@Prop({ required: true })
gender:string;

@Prop({type: String, enum: Role, default: Role.User})
role:Role;

}


export type UserDocuments  = HydratedDocument<Users>
export const UsersSchema = SchemaFactory.createForClass(Users)