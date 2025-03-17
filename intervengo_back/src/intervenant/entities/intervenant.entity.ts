import { ConditionalModule } from "@nestjs/config";
import { last } from "rxjs";
import { InterventionIntervenant } from "src/intervention_intervenant/entities/intervention_intervenant.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Intervenant {
    @PrimaryGeneratedColumn()
    id : number

    @Column({
        type: 'varchar',
        length: 50,
        nullable: false
    })
    first_name: string

    @Column({
        type: 'varchar',
        length: 50,
        nullable: false
    })
    last_name: string

    @Column({
        type: 'varchar',
        length: 100,
        nullable: false,
        unique: true,
    })
    email: string

    @Column({
        type: 'varchar',
        length: 30,
        nullable: true
    })
    password: string

    @Column({
        type:'int',
        nullable: true,
        unique: true,
    })
    tel: number

    @OneToMany(() => InterventionIntervenant, (interventionIntervenant) => interventionIntervenant.intervenant)
    interventionIntervenant: InterventionIntervenant[];
  name: string;

    constructor (id: number, first_name: string, last_name: string, email: string,password: string ,tel: number, interventionIntervenant: InterventionIntervenant[]) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
        this.tel = tel;
    }
}

