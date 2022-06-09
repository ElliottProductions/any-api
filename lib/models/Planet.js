const pool = require('../utils/pool');

module.exports = class Planet {
  id;
  name;
  type;
  url;
  distance_from_sun;
  orbital_period_in_days;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.type = row.type;
    this.url = row.url;
    this.distance_from_sun = row.distance_from_sun;
    this.orbital_period_in_days = row.orbital_period_in_days;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT id, name FROM planets;');
    return rows.map((row) => new Planet(row));
  }
  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM planets WHERE id=$1;', [id]);
    if (!rows[0]) return null;

    return new Planet(rows[0]);
  }

};
