import { ApiProperty } from "@nestjs/swagger";


export class CreateBanknoteDto {
    @ApiProperty({
        description: 'Value'
    })
    value: number;

    @ApiProperty({
        description: 'Color'
    })
    color: string;

    @ApiProperty({
        description: 'Illustration'
    })
    illustation: string;

    @ApiProperty({
        description: 'date of creation'
    })
    creation: string;
}
