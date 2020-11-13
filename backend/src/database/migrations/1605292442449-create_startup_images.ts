import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createStartupImages1605292442449 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'startup_images',
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
          name: 'path',
          type: 'varchar',
        },
        {
          name: 'startup_images_id',
          type: 'integer',
        },
      ],

      foreignKeys: [
        {
          name: 'StartupImages',
          columnNames: ['startup_images_id'],
          referencedTableName: 'startup_profile',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('startup_images');
  }
}
