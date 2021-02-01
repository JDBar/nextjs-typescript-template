import {NextApiRequest, NextApiResponse} from "next";

export default (_request: NextApiRequest, response: NextApiResponse) => {
	response.status(200).json({name: "John Doe"});
};
