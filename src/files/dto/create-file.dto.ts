import { Transform, Type } from "class-transformer";
import { IsNotEmpty } from "class-validator";


export class CreateFileDto {
    @IsNotEmpty({ message: 'Name không được để trống' })
    name: string;

    @IsNotEmpty({ message: 'address không được để trống' })
    address: string;

    @IsNotEmpty({ message: 'description không được để trống' })
    description: string;

    @IsNotEmpty({ message: 'logo không được để trống' })
    logo: string;

}