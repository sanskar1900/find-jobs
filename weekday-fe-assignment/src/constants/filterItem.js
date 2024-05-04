export const filterItems = [
  {
    type: "select",
    placeholder: "Roles",
    grouping: true,
    options: [
      {
        group: "ENGINEERING",
        items: [
          "Frontend",
          "Backend",
          "Full Stack",
          "IOS",
          "Flutter",
          "React Native",
          "Android",
          "Data Science",
          "Deep Learning",
        ],
      },
      {
        group: "DESIGN",
        items: [
          "Designer",
          "Design Manager",
          "Product Designer",
          "Graphic Designer",
        ],
      },
      {
        group: "PRODUCT",
        items: ["Product Manager"],
      },
      {
        group: "HR",
        items: ["HR Intern", "HR"],
      },
    ],
  },
  {
    type: "select",
    placeholder: "Number of Employees",
    grouping: false,
    options: [
      {
        group: null,
        items: [
          "1-10",
          "11-20",
          "21-50",
          "51-100",
          "101-200",
          "201-500",
          "500+",
        ],
      },
    ],
  },
  {
    type: "select",
    placeholder: "Experience",
    grouping: false,
    options: [{ group: null, items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }],
  },
  {
    type: "select",
    placeholder: "Remote",
    grouping: false,
    options: [{ group: null, items: ["Remote", "Hybrid", "In-office"] }],
  },
  {
    type: "select",
    placeholder: "Minimum base pay salary",
    grouping: false,
    options: [
      {
        group: null,
        items: ["0L", "10L", "20L", "30L", "40L", "50L", "60L", "70L"],
      },
    ],
  },
  {
    placeholder: "Search company name",
    type: "text",
  },
];
