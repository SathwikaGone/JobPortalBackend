const { gql } = require("apollo-server-express");

module.exports = gql`
  type Query {
    allCourses: [Courses!]!
  }

  type Mutation {
    addCourse(Course: Course!): Courses!

    #   deleteListing(employeeID: ID!): Listing!
    #   createTimesheet(Listing: List!): Listing!
    #   deleteTimesheet(_id: ID!): Listing!
    #   editTimesheetStatus(_id: ID!): Listing!
  }

  type Courses {
    _id: ID
    courseName: String!
    category: String!
    level: String!
    description: String!
    price: Int!
    access: String!
    certification: String!
    toLearn: String!
    requirments: String!
    duration: Int!
    createdBy: String!
    date: String!
  }

  input Course {
    _id: ID
    courseName: String!
    category: String!
    level: String!
    description: String!
    price: Int!
    access: String!
    certification: String!
    toLearn: String!
    requirments: String!
    duration: Int!
    createdBy: String!
    date: String
  }
`;
