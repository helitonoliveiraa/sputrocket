import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createStartupProfile1605280258969 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'startup_profile',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'name',
          type: 'varchar',
        },
        {
          name: 'creation_date',
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
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('startup_profile');
  }
}
