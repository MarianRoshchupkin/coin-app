/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('currencies', (table) => {
    table.string('id', 255).unique();
    table.string('userId', 255).notNullable();
    table.boolean('AUD').defaultTo(false);
    table.boolean('BTC').defaultTo(false);
    table.boolean('BYR').defaultTo(false);
    table.boolean('CAD').defaultTo(false);
    table.boolean('CHF').defaultTo(false);
    table.boolean('CNH').defaultTo(false);
    table.boolean('ETH').defaultTo(false);
    table.boolean('EUR').defaultTo(false);
    table.boolean('GBP').defaultTo(false);
    table.boolean('HKD').defaultTo(false);
    table.boolean('JPY').defaultTo(false);
    table.boolean('NZD').defaultTo(false);
    table.boolean('RUB').defaultTo(false);
    table.boolean('UAH').defaultTo(false);
    table.boolean('USD').defaultTo(false);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('currencies');
};
