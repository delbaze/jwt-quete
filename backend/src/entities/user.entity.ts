import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export default class User {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  email: string;

  @Field()
  @Column()
  password: string;
}
