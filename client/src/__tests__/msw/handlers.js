import { rest } from "msw";

import { badges, employeesWithBadgeDetails } from "../test-data";

export const handlers = [
  rest.get("http://localhost:3030/employees/:id", (req, res, ctx) => {
    const employee = employeesWithBadgeDetails[0];
    return res(ctx.json(employee));
  }),
  rest.get("http://localhost:3030/badges", (req, res, ctx) =>
    res(ctx.json(badges))
  ),
];
