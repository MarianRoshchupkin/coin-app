/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('banks', (table) => {
      table.string('id', 255).unique();
      table.integer('lat', 255).notNullable();
      table.integer('lon', 255).notNullable();
    }).then(() => {
      return knex('banks').insert([
        { lat: 44.878414, lon: 39.190289 },
        { lat: 44.6098268, lon: 40.1006606 },
        { lat: 51.9581028, lon: 85.9603235 },
        { lat: 52.4922513, lon: 82.7793606 },
        { lat: 53.3479968, lon: 83.7798064 },
        { lat: 44.6344864, lon: 39.1354738 },
        { lat: 44.8950433, lon: 37.3163282 },
        { lat: 45.0401604, lon: 38.9759647 },
        { lat: 44.7235026, lon: 37.7686135 },
        { lat: 45.2603626, lon: 38.1259774 },
        { lat: 43.5854551, lon: 39.7231548 },
        { lat: 45.2610949, lon: 37.4454412 },
        { lat: 44.9482948, lon: 34.1001151 },
        { lat: 45.190629, lon: 33.367634 },
        { lat: 45.3562627, lon: 36.4674513 },
        { lat: 44.4953612, lon: 34.166308 },
        { lat: 55.7540471, lon: 37.620405 },
        { lat: 55.830690, lon: 37.518810 },
        { lat: 55.829411, lon: 37.643015 },
        { lat: 55.748041, lon: 37.646865 },
        { lat: 55.720713, lon: 37.626331 },
        { lat: 55.740991, lon: 37.679561 },
        { lat: 55.670706, lon: 37.759068 },
        { lat: 55.627540, lon: 37.656112 },
        { lat: 59.9391313, lon: 30.3159004 },
        { lat: 59.945220, lon: 30.266218 },
        { lat: 59.961265, lon: 30.295690 },
        { lat: 59.978295, lon: 30.420077 },
        { lat: 59.893296, lon: 30.464415 },
        { lat: 59.851047, lon: 30.255081 },
        { lat: 59.910094, lon: 30.329551 },
        { lat: 59.850012, lon: 30.457657 }
      ])
    })
  ]);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('banks');
};
