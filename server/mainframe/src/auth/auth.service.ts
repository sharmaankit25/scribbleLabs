import { Injectable, UnauthorizedException, Logger, Res } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt'
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { JwtPayload } from './jwt-payload.interface';
import * as config from 'config'

@Injectable()
export class AuthService {
    private logger = new Logger('AuthService')

    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
        private jwtService: JwtService
    ) {}

    async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        return this.userRepository.signUp(authCredentialsDto)
    }

    async signIn(authCredentialsDto: AuthCredentialsDto): Promise<{ accessToken: string}> {
        const username = await this.userRepository.validateUserPassword(authCredentialsDto)

        if(!username) {
            throw new UnauthorizedException('Invalid Credentials')
        }

        const payload: JwtPayload = { username }
        const accessToken = await this.jwtService.sign(payload)
        this.logger.debug(`Generated JWT Token with payload ${JSON.stringify(payload)}`)

        return { accessToken }
    }

    public getCookieWithJwtToken(token: string) {
        const jwtConfig = config.get('jwt')
        return `Authentication=${token}; HttpOnly; Path=/; Max-Age=${jwtConfig.expiresIn || 10000}`;
    }

    public getCookieForLogOut() {
        return `Authentication=; HttpOnly; Path=/; Max-Age=0`;
    }
}
