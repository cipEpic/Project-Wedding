import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

interface IRequestBody {
    name: string;
    email: string;
    contact: string;
    message: string;
    country: string;
    "g-recaptcha-response": string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader("Method", "GET");
    if (req.method?.toUpperCase() !== "POST") return res.status(405).redirect(302, "/");
    let { "g-recaptcha-response": token, name, contact, email, message, country }: IRequestBody = req.body;
    const SECRET_KEY = process.env.CAPTCHA_SECRET;

    if (!name || !email || !message || !contact || !country) badRequestError("The request body was invalid");

    try {
        let response = await axios.get(`https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${token}`);

        if (!response.data.success) return badRequestError("Invalid captcha token");

        //TODO
        //Where to send the rest of the data?

        return res.redirect(302, "/contact?success");
    } catch (err) {
        console.error(err);
        return res.status(500).redirect(302, "/contact?errMsg=Unexpected error please try again later");
    }

    function badRequestError(message: string) {
        res.status(400).redirect(302, "/contact?errMsg=" + encodeURIComponent(message));
    }
}
