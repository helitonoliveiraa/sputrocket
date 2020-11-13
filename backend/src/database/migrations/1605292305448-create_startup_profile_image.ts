import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createStartupProfileImage1605292305448 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'startup_profile_image',
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
          name: 'startup_profile_image_id',
          type: 'integer',
        },
      ],

      foreignKeys: [
        {
          name: 'StartupProfileImage',
          columnNames: ['startup_profile_image_id'],
          referencedTableName: 'startup_profile',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
      ]
    }))  
  }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('startup_profile_image');
    }

}
