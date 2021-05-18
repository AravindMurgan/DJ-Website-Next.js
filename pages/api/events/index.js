// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { events } = require('./data.json');

export default (req, res) => {
	res.status(200).json(events);

	if (req.method === 'GET') {
		res.status(200).json(events);
	} else {
		res.setHeader('Allow', ['GET']);
		res.status(405).json({
			messgage: `Method ${req.method}
    is not allowed `,
		});
	}
};
