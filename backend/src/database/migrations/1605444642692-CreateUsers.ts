import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1605444642692 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [{
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                }, 
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'surname',
                    type: 'varchar',
                },
                {
                    name: 'username',
                    type: 'varchar',
                },
                {
                    name: 'email',
                    type: 'varchar',
                },
                {
                    name: 'password',
                    type: 'varchar',
                },
                {
                    name: 'avatar',
                    type: 'varchar',
                    isNullable: true,
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
        await queryRunner.dropTable('users');
    }

}
