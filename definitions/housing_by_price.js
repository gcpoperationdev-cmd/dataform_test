const categories = [
  { name: "high", min: 500000, max: 1000000 },
  { name: "medium", min: 250000, max: 500000 },
  { name: "low", min: 0, max: 250000 }
];

categories.forEach(category => {
  publish(`housing_${category.name}`, {
    type: "table"
  }).query(ctx => `
    SELECT *
    FROM ${ctx.ref("housing")}
    WHERE median_house_value >= ${category.min}
      AND median_house_value < ${category.max}
  `);
});
