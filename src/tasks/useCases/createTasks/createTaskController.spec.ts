import request from "supertest";
import { app } from "../../../shared/infra/app";
import { Connection, createConnection } from "typeorm"
import '../../../shared/infra/database'

let connection: Connection;
describe("Should create a new task controller", () => {
    beforeAll(async () => {
        connection = await createConnection()
        await connection.runMigrations()
    })
    afterAll(async () => {
        await connection.dropDatabase()
        await connection.close()
    })
    it("test", async () => {
        const response = await request(app).post("/tasks").send({
            nome: "Jardinagem",
            conteudo: "regar todo dia ao fim da tarde",
            nomeAutor: "Curu1pira"
        })

        expect(response.status).toBe(201)
    })
})