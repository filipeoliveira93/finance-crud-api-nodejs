import { MigrationBuilder } from 'node-pg-migrate';

export const up = (pgm: MigrationBuilder) => {
  pgm.alterColumn('transactions', 'id', {
    type: 'uuid',
    using: 'id::uuid',
  });
};

export const down = (pgm: MigrationBuilder) => {
  pgm.alterColumn('transactions', 'id', {
    type: 'varchar(255)',
  });
};
