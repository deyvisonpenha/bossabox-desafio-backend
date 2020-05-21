import {Router} from 'express';

const router = Router();

router.get('/', (request, response) => {
    return response.json({massage: "hello world"})
});

export default router;