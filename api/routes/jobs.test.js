const { doesNotMatch } = require('assert');
const request = require('supertest');
const app = require('../app');
const { getAllJobs, getJobById } = require('../routes/jobs.repository');
jest.mock('../routes/jobs.repository');


beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  jest.resetAllMocks();
});




// this is a unit test of the repo layer
describe('GET all jobs', () => {
  it('should return all jobs', async () => {

    // Arrange
    const fakeJobs = [
      {
          "id": 12,
          "title": "build a big fence",
          "clientname": "John Smith",
          "location": "123 Main St",
          "description": "build a fence",
          "created_at": "2023-03-21T01:37:26.327Z",
          "updated_at": "2023-03-21T01:37:26.327Z",
          "clientphonenumber": "1234567890",
          "jobstatus": "active",
          "userid": 31,
          "jobdate": "2019-01-01"
      }]
    // Mocking the repo response
    getAllJobs.mockImplementation(() => fakeJobs);
    // Act
    const response = await request(app).get('/jobs');
    // Assert
      expect(response.body).toEqual(fakeJobs);
      expect(response.statusCode).toBe(200);
      expect(getJobById).not.toHaveBeenCalled();
      
  });

  it('should return a 404 if wrong url', async () => {

    // Arrange
    const noJobs = {};
    // Mocking the repo response
    getAllJobs.mockImplementation(() => noJobs);
    // Act
    const response = await request(app).get('/job');
    // Assert
      expect(response.body).toEqual(noJobs);
      expect(response.statusCode).toBe(404);
      expect(getAllJobs).not.toHaveBeenCalled();
      expect(getJobById).not.toHaveBeenCalled();
  });


  it('should return a single job', async () => {

    // Arrange
    const fakeJob = {
      "id": 12,
      "title": "build a big fence",
      "clientname": "John Smith",
      "location": "123 Main St",
      "description": "build a fence",
      "created_at": "2023-03-21T01:37:26.327Z",
      "updated_at": "2023-03-21T01:37:26.327Z",
      "clientphonenumber": "1234567890",
      "jobstatus": "active",
      "userid": 31,
      "jobdate": "2019-01-01"
  }
    // Mocking the repo response
    getJobById.mockImplementation(() => fakeJob);
    // Act
    const response = await request(app).get('/jobs/12');
    // Assert
      expect(response.body).toEqual(fakeJob);
      expect(response.statusCode).toBe(200);
      expect(getAllJobs).not.toHaveBeenCalled();
    });

});


describe("GET a job by id", () => {
  test("should return a single job", async () => {
    const fakeJob = {
      id: 12,
      title: "build a big fence",
      clientname: "John Smith",
      location: "123 Main St",
      description: "build a fence",
      created_at: "2023-03-21T01:37:26.327Z",
      updated_at: "2023-03-22T01:37:26.327Z",
      clientphonenumber: "1234567890",
      jobstatus: "active",
      userid: 31,
      jobdate: "2019-01-01",
    };
    getJobById.mockImplementation(() => fakeJob);

    const response = await request(app).get('/jobs/12');

    
    expect(response.body).toEqual(fakeJob);
    expect(response.statusCode).toBe(200);
    expect(getAllJobs).not.toHaveBeenCalled();
  });

  test("should return a 404 if wrong url", async () => {
    const noJob = {};
    getJobById.mockImplementation(() => noJob);

    const response = await request(app).get("/job/1awd");

    expect(response.body).toEqual(noJob);
    expect(response.statusCode).toBe(404);
    expect(getAllJobs).not.toHaveBeenCalled();
  });
});