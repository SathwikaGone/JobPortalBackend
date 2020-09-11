const models = require("../Models/Course");

module.exports = {
  Query: {
    allCourses: async () => {
      try {
        const allCourses = await models.find();
        // console.log(TimeSheets);
        return allCourses;
      } catch (err) {
        return {
          message: err,
        };
      }
    },
  },

  Mutation: {
    addCourse: async (temp, req) => {
      try {
        const {
          courseName,
          category,
          level,
          description,
          price,
          access,
          certification,
          toLearn,
          requirments,
          duration,
          createdBy,
        } = req.Course;
        const addC = new models({
          courseName,
          category,
          level,
          description,
          price,
          access,
          certification,
          toLearn,
          requirments,
          duration,
          createdBy,
        });
        await addC.save();
        return addC;
      } catch (err) {
        return {
          message: err,
        };
      }
    },
  },
};
