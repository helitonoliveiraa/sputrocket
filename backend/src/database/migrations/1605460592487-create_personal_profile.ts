import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createPersonalProfile1605460592487 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'personal_profile',
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
          name: 'nickname',
          type: 'varchar',
        },
        {
          name: 'gender',
          type: 'boolean',
          default: false,
        },
        {
          name: 'age',
          type: 'varchar'
        }, 
        {
          name: 'address',
          type: 'varchar',
        }, 
        {
          name: 'phone_number',
          type: 'varchar',
        }, 
        {
          name: 'in_a_startup',
          type: 'boolean',
          default: false,
        }, 
        {
          name: 'description',
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
    await queryRunner.dropTable('personal_profile');
  }
}
