const request = require("supertest");
const express = require("express");
const app = require("./index"); // Make sure to export your app from app.js

describe("POST /tasks", () => {
  it("should create a new task and return the task data with a 201 status code", async () => {
    const newTask = {
      title: "Sample Task",
      description: "This is a sample task description.",
      due_date: "2024-12-31T23:59:59Z",
    };

    const response = await request(app)
      .post("/tasks")
      .send(newTask)
      .expect(201); // Check for a 201 Created status code

    // Validate response structure
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("title", newTask.title);
    expect(response.body).toHaveProperty("description", newTask.description);
    expect(response.body).toHaveProperty("due_date", newTask.due_date);
    expect(response.body).toHaveProperty("status", "pending"); // Default status
    expect(response.body).toHaveProperty("created_at");
    expect(response.body).toHaveProperty("updated_at");

    // Check that the timestamps are valid ISO strings
    expect(new Date(response.body.created_at).toISOString()).toBe(
      response.body.created_at
    );
    expect(new Date(response.body.updated_at).toISOString()).toBe(
      response.body.updated_at
    );
  });
});
