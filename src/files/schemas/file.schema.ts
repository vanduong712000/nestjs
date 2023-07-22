
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type FilesDocument = HydratedDocument<Files>;

@Schema({ timestamps: true })
export class Files {
    @Prop()
    name: string;

    @Prop()
    address: string;

    @Prop()
    description: string;

    @Prop()
    logo: string;

    @Prop({ type: Object })
    createdBy: {
        _id: mongoose.Schema.Types.ObjectId;
        email: string;
    }

    @Prop({ type: Object })
    updatedBy: {
        _id: mongoose.Schema.Types.ObjectId;
        email: string;
    }

    @Prop({ type: Object })
    deletedBy: {
        _id: mongoose.Schema.Types.ObjectId;
        email: string;
    }

    @Prop()
    createdAt: Date;

    @Prop()
    updatedAt: Date;

    @Prop()
    isDeleted: boolean;

    @Prop()
    isDeletedAt: Date;
}

export const FilesSchema = SchemaFactory.createForClass(Files);
