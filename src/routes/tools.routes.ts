import { Router } from 'express';
import ToolsRepository from '../repositories/ToolsRepoisitory';
import {getCustomRepository} from 'typeorm';

const toolsRouter = Router();

toolsRouter.get('/', async (request, response) => {
    const toolsRepository = getCustomRepository(ToolsRepository);
    const tools = await toolsRepository.all();
    return response.json(tools);
});

toolsRouter.post('/', async (request, response) => {
    const toolsRepository = getCustomRepository(ToolsRepository);
    const { title, link, description, tags} = request.body;
    const tool = await toolsRepository.create({title, link, description, tags});

    return response.json(tool);
});

export default toolsRouter;