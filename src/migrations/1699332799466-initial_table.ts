import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialTable1699332799466 implements MigrationInterface {
  name = 'InitialTable1699332799466';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "bet_channel" ("id" SERIAL NOT NULL, "betTitle" character varying NOT NULL, "betCreatorAddress" character varying NOT NULL, "betDesc" character varying NOT NULL, "minimumBetAmount" integer NOT NULL, "betStartDate" TIMESTAMP WITH TIME ZONE NOT NULL, "betEndDate" TIMESTAMP WITH TIME ZONE NOT NULL, "isActive" boolean NOT NULL DEFAULT false, "isPublished" boolean NOT NULL DEFAULT false, "realData" boolean, CONSTRAINT "UQ_daf464b8bc46a0efcb8c2dac6bc" UNIQUE ("betTitle"), CONSTRAINT "PK_f28602a7ba8a05cab35d1d16843" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "bet" ("id" SERIAL NOT NULL, "bettorAddress" character varying NOT NULL, "betChannelId" integer NOT NULL, "wager" integer NOT NULL, "option" boolean NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_4ceea2cdef435807614b8e17aed" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "bet"`);
    await queryRunner.query(`DROP TABLE "bet_channel"`);
  }
}
