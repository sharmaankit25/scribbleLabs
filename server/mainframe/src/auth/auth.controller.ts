import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  Res,
  UseGuards,
  Get,
} from '@nestjs/common'
import { AuthCredentialsDto } from './dto/auth-credentials.dto'
import { AuthService } from './auth.service'
import { Response } from 'express'
import { AuthGuard } from '@nestjs/passport'
import { GetUser } from './get-user.decorator'
import { User } from './user.entity'

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto
  ): Promise<void> {
    return this.authService.signUp(authCredentialsDto)
  }

  @Post('/signin')
  async signIn(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
    @Res({ passthrough: true }) response: Response
  ): Promise<{ accessToken: string }> {
    const resp = await this.authService.signIn(authCredentialsDto)
    const cookie = this.authService.getCookieWithJwtToken(resp.accessToken)
    response.setHeader('Set-Cookie', cookie)
    return resp
  }

  @Post('/signout')
  signOut(@Res() response: Response) {
    response.setHeader('Set-Cookie', this.authService.getCookieForLogOut())
    return response.sendStatus(200)
  }

  @UseGuards(AuthGuard())
  @Get('/user')
  getAuthUser(@GetUser() user: User) {
    const authUser = { ...user }
    delete authUser.password
    delete authUser.salt
    return authUser
  }

  @UseGuards(AuthGuard())
  @Get('/user/roles')
  getAuthUserRoles(@GetUser() user: User) {
    return this.authService.getAuthUserRoles(user.id)
  }

  @UseGuards(AuthGuard())
  @Get('/user/permissions')
  getAuthUserPermissions(@GetUser() user: User) {
    return this.authService.getAuthUserPermissions(user.id)
  }
}
