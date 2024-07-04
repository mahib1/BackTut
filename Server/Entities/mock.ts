import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class mock {
  
  @PrimaryGeneratedColumn()
  id : number; 

  @Column()
  firstName : string; 

  @Column()
  lastName : string; 

  @Column() 
  password : string;

  @Column({ default : true })
  isActive : boolean;

}
