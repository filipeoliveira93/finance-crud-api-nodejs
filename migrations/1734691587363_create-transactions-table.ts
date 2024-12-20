import { MigrationBuilder } from 'node-pg-migrate';

export const up = (pgm: MigrationBuilder) => {
  pgm.createTable('transactions', {
    id: { type: 'text', primaryKey: true },
    name: { type: 'varchar(255)', notNull: true },
    value: { type: 'numeric(10,2)', notNull: true },
    type: { type: 'varchar(50)', notNull: true },
    category: { type: 'varchar(100)', notNull: true },
    created_at: {
      type: 'timestamp with time zone',
      default: pgm.func('current_timestamp'),
    },
  });
};

export const down = (pgm: MigrationBuilder) => {
  pgm.dropTable('transactions');
};
