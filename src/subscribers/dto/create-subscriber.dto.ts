import { IsArray, IsEmail, IsMongoId, IsNotEmpty, IsString } from "class-validator";


export class CreateSubscriberDto {
    @IsNotEmpty({ message: 'Name không được để trống' })
    name: string;

    @IsEmail({}, { message: 'Email không đúng định dạng' })
    @IsNotEmpty({ message: 'Email không được để trống' })
    email: string;

    @IsNotEmpty({ message: 'Skill không được để trống' })
    @IsArray({ message: 'Skill có định dạng là array' })
    @IsString({ each: true, message: 'Skill có định dạng là string' })
    skills: string[];

}
