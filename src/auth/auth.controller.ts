import { Controller, Post,Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import {AuthDto} from './dto/AuthDto'

@Controller('auth')
export class AuthController {

    constructor(private readonly Authservice: AuthService) {}


    @Post('/abc')
    async signup(@Body() AuthDto:AuthDto):Promise<String>
    {   
        await  this.Authservice.Signup(AuthDto);
        return "hjgh"
    }

    
}
