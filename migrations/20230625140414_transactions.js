/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('transactions', (table) => {
    table.string('id', 255).unique();
    table.string('userId', 255).notNullable();
    table.integer('sum', 255).notNullable();
    table.double('date', 255).notNullable();
    table.double('from', 255).notNullable();
    table.double('to', 255).notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('transactions');
};
