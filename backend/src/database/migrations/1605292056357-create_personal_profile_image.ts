import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createPersonalProfileImage1605292056357 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'personal_profile_image',
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
          name: 'personal_profile_image_id',
          type: 'integer',
        },
      ],

      foreignKeys: [
        {
          name: 'PersonalProfileImage',
          columnNames: ['personal_profile_image_id'],
          referencedTableName: 'personal_profile',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('personal_profile_image');
  }
}
