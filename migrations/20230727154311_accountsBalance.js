/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('accountsBalance', (table) => {
    table.string('id', 255).unique();
    table.string('userId', 255).notNullable();
    table.double('number', 255).notNullable();
    table.integer('balance', 255).defaultTo(0);
    table.double('date', 255).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('accountsBalance');
};
