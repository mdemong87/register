import GetController from "../../../controller/getController";
import PostController from "../../../controller/postController";


export default function handler(req, res) {

    const method = req.method;

    switch (method) {
        case "POST": PostController(req, res);
            break;
        case "GET": GetController(req, res);
            break;
        default: res.status(405).json({ messege: 'Method Not Allow' })
            break;
    }

}
