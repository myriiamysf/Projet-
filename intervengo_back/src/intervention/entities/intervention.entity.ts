import { sign } from 'crypto';
import { InterventionIntervenant } from 'src/intervention_intervenant/entities/intervention_intervenant.entity';
import { Status } from 'src/other/enum';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Intervention {
  @PrimaryGeneratedColumn()
  id: number;

  @Column( {
    type:'varchar'
  })
  location: string;

  @Column({
    type: 'varchar'
  })
  task: string;

  @Column({
    // default: Status.A_FAIRE
    type: 'enum', enum: ['A faire', 'En cours', 'Fini'],
    default: 'A faire'
  })
  status: string;

  @Column({
    type: 'varchar',
    nullable: true
  })
  action_performed: string;

  @Column({
    type: 'varchar',
    nullable: true
  })
  picture: string;

  @Column({
    type: 'varchar',
    nullable: true
  })
  signature: string;

  @OneToMany(() => InterventionIntervenant, interventionIntervenant => interventionIntervenant.intervention)
  interventionIntervenant: InterventionIntervenant[]
  typeIntervention: string;

  constructor (id: number, location: string, task: string, status: string, action_performed: string, picture: string, signature: string) {
    this.id = id;
    this.location = location;
    this.task = task;
    this.status = status;
    this.action_performed = action_performed;
    this.picture = picture;
    this.signature = signature;
  }
}