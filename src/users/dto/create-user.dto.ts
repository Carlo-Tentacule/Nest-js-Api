import { ApiProperty } from "@nestjs/swagger";


export class CreateUserDto {
    @ApiProperty({
        description: 'Prenom'
    })
    firstName: string;

    @ApiProperty({
        description: 'Nom'
    })
    lastName: string;

    @ApiProperty({
        description: 'Mail'
    })
    email: string;

    @ApiProperty({
        description: 'Mot de passe'
    })
    password: string;

}
