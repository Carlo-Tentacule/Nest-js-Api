import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { BanknoteModule } from './banknote/banknote.module';
import configuration from 'config/configuration';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://user_st:passworduserst@clusterapi.6y7a4oc.mongodb.net/?retryWrites=true&w=majority',
      database: 'myFirstDatabase',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      ssl: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      synchronize: true, //not for production
    }),
    UsersModule,
    AuthModule,
    BanknoteModule,
    ConfigModule.forRoot({
      // envFilePath: ['.env.development.local', '.env.development'],
      isGlobal: true,
      load: [configuration],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
