import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity('banknote')
export class Banknote {

    @ObjectIdColumn()
    @ApiProperty({ type: Number, description: 'ID', example: 2 })
    id: string;

    @ApiProperty({
        type: Number,
        description: 'Value',
        example: 20,
    })
    @Column({ type: String, unique: true, nullable: false })
    value: number;

    @ApiProperty({
        type: String,
        description: 'Color',
        example: 'blue',
    })
    @Column()
    color: string;

    @ApiProperty({ type: String, description: 'Illustration', example: "vitraux d'architecture gothique" })
    @Column()
    illustration: string;

    @ApiProperty({ type: Date, description: 'date of creation', example: "12/12/23" })
    @Column()
    creation: string;
}

