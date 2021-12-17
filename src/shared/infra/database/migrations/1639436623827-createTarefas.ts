import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createTarefas1639436623827 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: "tarefas",
                columns: [
                    {
                        name: "id",
                        type: "uuid"
                    },
                    {
                        name: "nome",
                        type: "varchar"
                    },
                    {
                        name: "conteudo",
                        type: "varchar"
                    },
                    {
                        name: "nomeAutor",
                        type: "varchar"
                    },
                    {
                        name: "dataCriacao",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tarefas")
    }

}
