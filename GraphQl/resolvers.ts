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
    getCategory: async (temp, { category }) => {
      try {
        const allCourses = await models.find();
        let p = allCourses.filter((item) => item.category == category);
        return p;
      } catch (err) {
        return {
          message: err,
        };
      }
    },
    searchCards: async (temp, { word }) => {
      try {
        const allCourses = await models.find();
        let p = allCourses.filter(
          (item) =>
            item.courseName.includes(word) || item.description.includes(word)
        );
        return p;
      } catch (err) {
        return {
          message: err,
        };
      }
    },
    filterCards: async (temp, { filter }) => {
      try {
        const allCourses = await models.find();
        let sendCourses = [];

        let func = (item) => {
          switch (item) {
            case "lessthanfive":
              let p = allCourses.filter((item) => item.duration < 6);
              sendCourses = [...new Set([...sendCourses, ...p])];
              break;
            case "sixtotwenty":
              let q = allCourses.filter(
                (item) => item.duration < 21 && item.duration > 5
              );
              sendCourses = [...new Set([...sendCourses, ...q])];
              break;
            case "tewntyandmore":
              let r = allCourses.filter((item) => item.duration > 20);
              sendCourses = [...new Set([...sendCourses, ...r])];
              break;

            case "Beginner":
              let a = allCourses.filter((item) => item.level === " Beginner");
              sendCourses = [...new Set([...sendCourses, ...a])];
              break;
            case "Intermediate":
              let b = allCourses.filter(
                (item) => item.level === " Intermediate"
              );
              sendCourses = [...new Set([...sendCourses, ...b])];
              break;
            case "Expert":
              let c = allCourses.filter((item) => item.level === " Expert");
              sendCourses = [...new Set([...sendCourses, ...c])];
              break;

            case "paid":
              let d = allCourses.filter((item) => item.price > 0);
              sendCourses = [...new Set([...sendCourses, ...d])];
              break;
            case "free":
              let e = allCourses.filter((item) => (item.price = 0));
              sendCourses = [...new Set([...sendCourses, ...e])];
              break;

            default:
              sendCourses;
          }
        };
        let filterData = filter.split(",");

        for (let i = 0; i < filterData.length; i++) {
          func(filterData[i]);
        }
        console.log("lenth", sendCourses.length);
        return sendCourses;
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
