import { setupServer } from 'msw/node';
import { rest } from 'msw';

export const server = setupServer(
	rest.get(`http://localhost:3004/card?title_like=1`, (req, res, ctx) => {
		return res(ctx.json({}));
	}),
	rest.post(`http://localhost:3004/card`, (req, res, ctx) => {
		return res(ctx.json({}));
	}),
	rest.patch(`http://localhost:3004/card/id`, (req, res, ctx) => {
		return res(ctx.json({}));
	}),
	rest.delete(`http://localhost:3004/card/id`, (req, res, ctx) => {
		return res(ctx.json({}));
	})
);
