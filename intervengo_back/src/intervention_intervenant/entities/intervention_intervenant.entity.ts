import { IsNotEmpty } from "class-validator";
import { Intervenant } from "src/intervenant/entities/intervenant.entity";
import { Intervention } from "src/intervention/entities/intervention.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class InterventionIntervenant {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP'
    })
    assigned_at: Date;

    @ManyToOne(() => Intervention, (intervention) => intervention.id, { eager: true})
    @JoinColumn({name: 'intervention_id', referencedColumnName: 'id'})
    @IsNotEmpty()
    intervention: Intervention;

    @ManyToOne(() => Intervenant, (intervenant) => intervenant.id, { eager: true})
    @JoinColumn({name: 'intervenant_id', referencedColumnName: 'id'})
    @IsNotEmpty()
    intervenant: Intervenant;

    constructor (id: number, intervention: Intervention, intervenant: Intervenant){
        this.id = id;
        this.intervention = intervention;
        this.intervenant = intervenant;
    }
}
