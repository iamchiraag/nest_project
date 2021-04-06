import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Res,
  UseGuards,
  Request,
  UseInterceptors,
} from '@nestjs/common';
import { signupDto } from './signup.dto';
import { SignupService } from './signup.service';
import { sign_in } from './signup.interface';
import { AuthGuard } from '@nestjs/passport';

@Controller('signup')
export class SignupController {
  constructor(private readonly SignupService: SignupService) {}

  // @Post('/create')
  // @UseInterceptors(FileInterceptor('img', { storage }))
  // async upload(@UploadedFile() file, @Body() signupDto: signupDto) {
  //   // const response = {
  //   //   originalname: file.originalname,
  //   //   filename: file.filename,
  //   // };
  //   // await file.path.save()
  //   const create = await this.SignupService.signup_Create(signupDto);
  //   return create;
  // }
  @Post('/create')
  async signup(@Body() signupDto: signupDto) {
    const create = await this.SignupService.signup_Create(signupDto);
    return create;
  }
  @Get('/all')
  async Prod_All() {
    const all = await this.SignupService.signup_All();
    return all;
  }
  @Delete(':id')
  delete(@Param('id') id): Promise<sign_in> {
    return this.SignupService.delete(id);
  }
  // @Get(':id')
  // findOne(@Param('id') id): Promise<sign_in> {
  //   return this.SignupService.findOne(id);
  // }
  // @Get('/imgpath')
  // seeUploadedFile(@Param('imgpath') image, @Res() res) {
  //   return res.sendFile(image, { root: './uploads' });
  // }
  // @UseGuards(AuthGuard('local'))
  // @Post('auth/login')
  // async login(@Request() req) {
  //  req.user;
  //  return "su ccess"
  // }
}
