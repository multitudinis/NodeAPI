import { v4 as uuidV4 } from "uuid"
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("tarefas")
class Task {
    @PrimaryColumn()
    id?: string;
    @Column()
    nome: string;
    @Column()
    conteudo: string;
    @Column()
    nomeAutor: string;
    @CreateDateColumn()
    dataCriacao: Date;
    constructor() {
        if (!this.id) {
            this.id = uuidV4()
        }
    }
}

export { Task }