import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthInput } from './dto/auth.input';
import { AuthType } from './dto/auth.type';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => AuthType)
  public async login(@Args('input') input: AuthInput): Promise<AuthType> {
    const response = await this.authService.validateUser(input);

    console.log(response.user);

    return {
      user: response.user,
      token: response.token,
    };
  }
}
