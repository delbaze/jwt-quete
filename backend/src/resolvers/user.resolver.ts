import { Arg, Mutation, Query, Resolver } from "type-graphql";
import UserService from "../services/user.service";
import User, { InputRegister } from "../entities/user.entity";

@Resolver()
export default class UserResolver {
  @Query(() => [User])
  async users() {
    return await new UserService().listUsers();
  }

  @Mutation(() => User)
  async register(@Arg("infos") infos: InputRegister){
      console.log("Mes infos => ", infos);
  }
 
}
