/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('exchange', (table) => {
      table.string('id', 255).unique();
      table.string('from', 255).notNullable();
      table.string('to', 255).notNullable();
      table.integer('rate', 255).defaultTo(0);
      table.integer('change', 255).defaultTo(0);
    }).then(() => {
      return knex('exchange').insert([
        { id: Math.random().toString(36).substring(2, 15), from: 'AUD', to: 'BTC' },
        { id: Math.random().toString(36).substring(2, 15), from: 'AUD', to: 'CHF' },
        { id: Math.random().toString(36).substring(2, 15), from: 'AUD', to: 'CNH' },
        { id: Math.random().toString(36).substring(2, 15), from: 'AUD', to: 'EUR' },
        { id: Math.random().toString(36).substring(2, 15), from: 'AUD', to: 'JPY' },
        { id: Math.random().toString(36).substring(2, 15), from: 'AUD', to: 'NZD' },
        { id: Math.random().toString(36).substring(2, 15), from: 'AUD', to: 'RUB' },
        { id: Math.random().toString(36).substring(2, 15), from: 'AUD', to: 'UAH' },
        { id: Math.random().toString(36).substring(2, 15), from: 'BTC', to: 'BYR' },
        { id: Math.random().toString(36).substring(2, 15), from: 'BTC', to: 'CAD' },
        { id: Math.random().toString(36).substring(2, 15), from: 'BTC', to: 'CHF' },
        { id: Math.random().toString(36).substring(2, 15), from: 'BTC', to: 'EUR' },
        { id: Math.random().toString(36).substring(2, 15), from: 'BTC', to: 'GBP' },
        { id: Math.random().toString(36).substring(2, 15), from: 'BTC', to: 'JPY' },
        { id: Math.random().toString(36).substring(2, 15), from: 'BTC', to: 'USD' },
        { id: Math.random().toString(36).substring(2, 15), from: 'BYR', to: 'AUD' },
        { id: Math.random().toString(36).substring(2, 15), from: 'BYR', to: 'CAD' },
        { id: Math.random().toString(36).substring(2, 15), from: 'BYR', to: 'CHF' },
        { id: Math.random().toString(36).substring(2, 15), from: 'BYR', to: 'EUR' },
        { id: Math.random().toString(36).substring(2, 15), from: 'BYR', to: 'HKD' },
        { id: Math.random().toString(36).substring(2, 15), from: 'BYR', to: 'NZD' },
        { id: Math.random().toString(36).substring(2, 15), from: 'BYR', to: 'RUB' },
        { id: Math.random().toString(36).substring(2, 15), from: 'CAD', to: 'AUD' },
        { id: Math.random().toString(36).substring(2, 15), from: 'CAD', to: 'CHF' },
        { id: Math.random().toString(36).substring(2, 15), from: 'CAD', to: 'CNH' },
        { id: Math.random().toString(36).substring(2, 15), from: 'CAD', to: 'ETH' },
        { id: Math.random().toString(36).substring(2, 15), from: 'CAD', to: 'HKD' },
        { id: Math.random().toString(36).substring(2, 15), from: 'CAD', to: 'JPY' },
        { id: Math.random().toString(36).substring(2, 15), from: 'CAD', to: 'RUB' },
        { id: Math.random().toString(36).substring(2, 15), from: 'CHF', to: 'CNH' },
        { id: Math.random().toString(36).substring(2, 15), from: 'CHF', to: 'ETH' },
        { id: Math.random().toString(36).substring(2, 15), from: 'CHF', to: 'EUR' },
        { id: Math.random().toString(36).substring(2, 15), from: 'CHF', to: 'GBP' },
        { id: Math.random().toString(36).substring(2, 15), from: 'CHF', to: 'HKD' },
        { id: Math.random().toString(36).substring(2, 15), from: 'CHF', to: 'NZD' },
        { id: Math.random().toString(36).substring(2, 15), from: 'CHF', to: 'RUB' },
        { id: Math.random().toString(36).substring(2, 15), from: 'CHF', to: 'UAH' },
        { id: Math.random().toString(36).substring(2, 15), from: 'CHF', to: 'USD' },
        { id: Math.random().toString(36).substring(2, 15), from: 'CNH', to: 'BTC' },
        { id: Math.random().toString(36).substring(2, 15), from: 'CNH', to: 'BYR' },
        { id: Math.random().toString(36).substring(2, 15), from: 'CNH', to: 'HKD' },
        { id: Math.random().toString(36).substring(2, 15), from: 'CNH', to: 'NZD' },
        { id: Math.random().toString(36).substring(2, 15), from: 'CNH', to: 'RUB' },
        { id: Math.random().toString(36).substring(2, 15), from: 'CNH', to: 'UAH' },
        { id: Math.random().toString(36).substring(2, 15), from: 'CNH', to: 'USD' },
        { id: Math.random().toString(36).substring(2, 15), from: 'ETH', to: 'AUD' },
        { id: Math.random().toString(36).substring(2, 15), from: 'ETH', to: 'BTC' },
        { id: Math.random().toString(36).substring(2, 15), from: 'ETH', to: 'BYR' },
        { id: Math.random().toString(36).substring(2, 15), from: 'ETH', to: 'CNH' },
        { id: Math.random().toString(36).substring(2, 15), from: 'ETH', to: 'EUR' },
        { id: Math.random().toString(36).substring(2, 15), from: 'ETH', to: 'GBP' },
        { id: Math.random().toString(36).substring(2, 15), from: 'ETH', to: 'JPY' },
        { id: Math.random().toString(36).substring(2, 15), from: 'ETH', to: 'NZD' },
        { id: Math.random().toString(36).substring(2, 15), from: 'ETH', to: 'RUB' },
        { id: Math.random().toString(36).substring(2, 15), from: 'EUR', to: 'CAD' },
        { id: Math.random().toString(36).substring(2, 15), from: 'EUR', to: 'CNH' },
        { id: Math.random().toString(36).substring(2, 15), from: 'EUR', to: 'GBP' },
        { id: Math.random().toString(36).substring(2, 15), from: 'EUR', to: 'HKD' },
        { id: Math.random().toString(36).substring(2, 15), from: 'EUR', to: 'USD' },
        { id: Math.random().toString(36).substring(2, 15), from: 'GBP', to: 'AUD' },
        { id: Math.random().toString(36).substring(2, 15), from: 'GBP', to: 'BYR' },
        { id: Math.random().toString(36).substring(2, 15), from: 'GBP', to: 'CAD' },
        { id: Math.random().toString(36).substring(2, 15), from: 'GBP', to: 'CNH' },
        { id: Math.random().toString(36).substring(2, 15), from: 'GBP', to: 'HKD' },
        { id: Math.random().toString(36).substring(2, 15), from: 'GBP', to: 'JPY' },
        { id: Math.random().toString(36).substring(2, 15), from: 'GBP', to: 'NZD' },
        { id: Math.random().toString(36).substring(2, 15), from: 'GBP', to: 'UAH' },
        { id: Math.random().toString(36).substring(2, 15), from: 'HKD', to: 'AUD' },
        { id: Math.random().toString(36).substring(2, 15), from: 'HKD', to: 'BTC' },
        { id: Math.random().toString(36).substring(2, 15), from: 'HKD', to: 'ETH' },
        { id: Math.random().toString(36).substring(2, 15), from: 'HKD', to: 'JPY' },
        { id: Math.random().toString(36).substring(2, 15), from: 'HKD', to: 'RUB' },
        { id: Math.random().toString(36).substring(2, 15), from: 'HKD', to: 'UAH' },
        { id: Math.random().toString(36).substring(2, 15), from: 'JPY', to: 'BYR' },
        { id: Math.random().toString(36).substring(2, 15), from: 'JPY', to: 'CHF' },
        { id: Math.random().toString(36).substring(2, 15), from: 'JPY', to: 'CNH' },
        { id: Math.random().toString(36).substring(2, 15), from: 'JPY', to: 'EUR' },
        { id: Math.random().toString(36).substring(2, 15), from: 'JPY', to: 'RUB' },
        { id: Math.random().toString(36).substring(2, 15), from: 'NZD', to: 'BTC' },
        { id: Math.random().toString(36).substring(2, 15), from: 'NZD', to: 'CAD' },
        { id: Math.random().toString(36).substring(2, 15), from: 'NZD', to: 'EUR' },
        { id: Math.random().toString(36).substring(2, 15), from: 'NZD', to: 'HKD' },
        { id: Math.random().toString(36).substring(2, 15), from: 'NZD', to: 'JPY' },
        { id: Math.random().toString(36).substring(2, 15), from: 'NZD', to: 'RUB' },
        { id: Math.random().toString(36).substring(2, 15), from: 'NZD', to: 'UAH' },
        { id: Math.random().toString(36).substring(2, 15), from: 'RUB', to: 'BTC' },
        { id: Math.random().toString(36).substring(2, 15), from: 'RUB', to: 'EUR' },
        { id: Math.random().toString(36).substring(2, 15), from: 'RUB', to: 'GBP' },
        { id: Math.random().toString(36).substring(2, 15), from: 'RUB', to: 'UAH' },
        { id: Math.random().toString(36).substring(2, 15), from: 'UAH', to: 'BTC' },
        { id: Math.random().toString(36).substring(2, 15), from: 'UAH', to: 'BYR' },
        { id: Math.random().toString(36).substring(2, 15), from: 'UAH', to: 'CAD' },
        { id: Math.random().toString(36).substring(2, 15), from: 'UAH', to: 'ETH' },
        { id: Math.random().toString(36).substring(2, 15), from: 'UAH', to: 'EUR' },
        { id: Math.random().toString(36).substring(2, 15), from: 'UAH', to: 'JPY' },
        { id: Math.random().toString(36).substring(2, 15), from: 'UAH', to: 'USD' },
        { id: Math.random().toString(36).substring(2, 15), from: 'USD', to: 'AUD' },
        { id: Math.random().toString(36).substring(2, 15), from: 'USD', to: 'BYR' },
        { id: Math.random().toString(36).substring(2, 15), from: 'USD', to: 'CAD' },
        { id: Math.random().toString(36).substring(2, 15), from: 'USD', to: 'ETH' },
        { id: Math.random().toString(36).substring(2, 15), from: 'USD', to: 'GBP' },
        { id: Math.random().toString(36).substring(2, 15), from: 'USD', to: 'HKD' },
        { id: Math.random().toString(36).substring(2, 15), from: 'USD', to: 'JPY' },
        { id: Math.random().toString(36).substring(2, 15), from: 'USD', to: 'NZD' },
        { id: Math.random().toString(36).substring(2, 15), from: 'USD', to: 'RUB' },
      ])
    })
  ])
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('exchange');
};
