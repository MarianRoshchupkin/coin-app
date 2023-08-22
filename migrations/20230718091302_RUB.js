/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('RUB', (table) => {
    table.string('id', 255).unique();
    table.string('userId', 255).notNullable();
    table.integer('amount', 255).notNullable();
    table.string('code', 255).defaultTo('RUB');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('RUB');
};
