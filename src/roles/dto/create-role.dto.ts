import { IsArray, IsEmail, IsMongoId, IsNotEmpty } from "class-validator";
import mongoose from "mongoose";


export class CreateRoleDto {
    @IsNotEmpty({ message: 'Name không được để trống' })
    name: string;

    @IsEmail({}, { message: 'email phải đúng định dạng' })
    @IsNotEmpty({ message: 'email không được để trống' })
    email: string;

    @IsNotEmpty({ message: 'description không được để trống' })
    description: string;

    @IsNotEmpty({ message: 'isActive không được để trống' })
    isActive: boolean;


    @IsNotEmpty({ message: 'permissions không được để trống' })
    @IsMongoId({ each: true, message: "each permissions là mongo object id" })
    @IsArray({ message: 'permissions có định dạng là array' })
    permissions: mongoose.Schema.Types.ObjectId[];

}