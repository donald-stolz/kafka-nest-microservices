import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '@kafka-nest-microservices/shared/dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  create(@Body(ValidationPipe) createAuthDto: CreateUserDto) {
    return this.authService.create(createAuthDto);
  }
}
