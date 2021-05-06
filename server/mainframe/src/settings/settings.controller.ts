import { Controller, Get } from '@nestjs/common';

@Controller('settings')
export class SettingsController {

    @Get()
    getSettings() {
        return {
            primaryColor: '#ffcc33'
        }
    }
}
