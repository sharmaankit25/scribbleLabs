import { Controller, Post, Body, ValidationPipe, Res } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('/signup')
    signUp(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto​​): Promise<void>  {
       return this.authService.signUp(authCredentialsDto)
    }

    @Post('/signin')
    async signIn(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto, @Res({ passthrough: true }) response: Response): Promise<{ accessToken: string }> {
        const resp = await this.authService.signIn(authCredentialsDto)
        const cookie = this.authService.getCookieWithJwtToken(resp.accessToken)
        response.setHeader('Set-Cookie', cookie)
        return resp
    }

    @Post('/signout')
    signOut(@Res() response: Response) {
        response.setHeader('Set-Cookie', this.authService.getCookieForLogOut());
        return response.sendStatus(200);
    }
}
