import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateExpenses1605359716495 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: 'expenses',
                columns: [{
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                }, 
                {
                    name: 'title',
                    type: 'varchar',
                },
                {
                    name: 'description',
                    type: 'varchar',
                },
                {
                    name: 'value',
                    type: 'numeric',
                },
                {
                    name: 'createdAt',
                    type: 'timestamp',
                    default: 'now()',
                },
                {
                    name: 'createdBy',
                    type: 'varchar',
                },
                {
                    name: 'lastUpdatedAt',
                    type: 'timestamp',
                    default: 'now()',
                },
                {
                    name: 'lastUpdatedBy',
                    type: 'varchar',
                }
                ]
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('expenses');
    }
}
