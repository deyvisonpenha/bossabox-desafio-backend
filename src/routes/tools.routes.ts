import { Router } from 'express';
import ToolsRepository from '../repositories/ToolsRepoisitory';
import {getCustomRepository} from 'typeorm';

const toolsRouter = Router();
const toolsRepository = getCustomRepository(ToolsRepository);

toolsRouter.get('/', (request, response) => {
    const tools = toolsRepository.all();
    return response.json(tools);
});

toolsRouter.post('/', (request, response) => {
    const { title, link, description, tags} = request.body;
    const tool = toolsRepository.create({title, link, description, tags});

    return response.json(tool);
});

export default toolsRouter;