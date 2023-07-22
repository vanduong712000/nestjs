import { Controller, Get, Post, Render, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { AuthService } from './auth/auth.service';


@Controller() // route
export class AppController {
  constructor(
    private readonly appService: AppService,
    private ConfigService: ConfigService,
    private authService: AuthService
  ) { }

}
