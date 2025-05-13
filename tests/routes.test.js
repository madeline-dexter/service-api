// const request = require('supertest');

// const app = require('../src/app');
// const { db } = require('../src/configs/local');
// const User = require('../src/models/User');

// beforeAll(async () => {
//   await db.sync({ force: true });
// });

// afterAll(async () => {
//   await db.close();
// });

// describe('User Routes', () => {
//   it('should create a new user', async () => {
//     const response = await request(app).post('/users').send({
//       name: 'John Doe',
//       email: 'john.doe@example.com',
//       password: 'password123',
//     });
//     expect(response.status).toBe(201);
//     expect(response.body.email).toBe('john.doe@example.com');
//   });

//   it('should fetch all users', async () => {
//     const response = await request(app).get('/users');
//     expect(response.status).toBe(200);
//     expect(response.body.length).toBeGreaterThan(0);
//   });

//   it('should fetch a user by ID', async () => {
//     const user = await User.create({
//       name: 'Jane Doe',
//       email: 'jane.doe@example.com',
//       password: 'password123',
//     });
//     const response = await request(app).get(`/users/${user.id}`);
//     expect(response.status).toBe(200);
//     expect(response.body.email).toBe('jane.doe@example.com');
//   });

//   it('should update a user by ID', async () => {
//     const user = await User.create({
//       name: 'Jane Doe',
//       email: 'jane.smith@example.com',
//       password: 'password123',
//     });
//     const response = await request(app).put(`/users/${user.id}`).send({
//       name: 'Jane Smith',
//     });
//     expect(response.status).toBe(200);
//     expect(response.body.name).toBe('Jane Smith');
//   });

//   it('should delete a user by ID', async () => {
//     const user = await User.create({
//       name: 'John Smith',
//       email: 'john.smith@example.com',
//       password: 'password123',
//     });
//     const response = await request(app).delete(`/users/${user.id}`);
//     expect(response.status).toBe(204);
//   });
// });
