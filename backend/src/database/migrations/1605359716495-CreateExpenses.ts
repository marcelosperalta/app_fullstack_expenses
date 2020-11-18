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
                    isNullable: true,
                },
                {
                    name: 'value',
                    type: 'numeric',
                },
                {
                    name: 'createdAt',
                    type: 'timestamp',
                    isNullable: true,
                },
                {
                    name: 'createdBy',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'lastUpdatedAt',
                    type: 'timestamp',
                    isNullable: true,
                },
                {
                    name: 'lastUpdatedBy',
                    type: 'varchar',
                    isNullable: true,
                }
                ]
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('expenses');
    }
}
