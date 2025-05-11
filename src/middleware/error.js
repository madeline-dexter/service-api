const { Sequelize } = require('sequelize');

// Error handling middleware for Sequelize
module.exports = (err, req, res, next) => {
  console.error(err);

  if (err instanceof Sequelize.ValidationError) {
    return res.status(400).json({ error: 'Validation error', details: err.errors });
  }
  if (err instanceof Sequelize.UniqueConstraintError) {
    return res.status(409).json({ error: 'Unique constraint error', details: err.errors });
  }
  if (err instanceof Sequelize.ForeignKeyConstraintError) {
    return res.status(400).json({ error: 'Foreign key constraint error', details: err.errors });
  }
  if (err instanceof Sequelize.TimeoutError) {
    return res.status(503).json({ error: 'Database timeout error' });
  }
  if (err instanceof Sequelize.ConnectionError) {
    return res.status(503).json({ error: 'Database connection error' });
  }
  if (err instanceof Sequelize.OptimisticLockError) {
    return res.status(409).json({ error: 'Optimistic lock error', details: err.errors });
  }
  if (err instanceof Sequelize.EmptyResultError) {
    return res.status(404).json({ error: 'No results found' });
  }
  if (err instanceof Sequelize.DatabaseError) {
    return res.status(500).json({ error: 'Database error' });
  }
  if (err instanceof Sequelize.AccessDeniedError) {
    return res.status(403).json({ error: 'Access denied' });
  }
  return res.status(500).json({ error: 'Internal server error' });
};
