export const up = (pgm) => {
    pgm.alterColumn('transactions', 'id', {
        type: 'uuid',
        using: 'id::uuid',
    });
};
export const down = (pgm) => {
    pgm.alterColumn('transactions', 'id', {
        type: 'varchar(255)',
    });
};
