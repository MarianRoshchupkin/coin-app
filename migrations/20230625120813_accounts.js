/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('accounts', (table) => {
    table.string('id', 255).unique();
    table.string('userId', 255).notNullable();
    table.integer('number', 255).notNullable();
    table.integer('balance', 255).defaultTo(0);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('accounts');
};
