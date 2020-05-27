import Tools from '../schemas/Tools';
import {Repository, getRepository, getMongoRepository, MongoRepository} from 'typeorm';
import InterfaceToolsRepository from './InterfaceToolsRepository';


class ToolsRepository {
  private ormRepositoryTools: Repository<Tools>;

  constructor(){
    this.ormRepositoryTools = getRepository(Tools);
  }

  public async all(): Promise<Tools[]>{
    const tools = await this.ormRepositoryTools.find();
    return tools;
  }

  public async create({title, link, description, tags}: InterfaceToolsRepository): Promise<Tools>{
    const tool = this.ormRepositoryTools.create({title, link, description, tags});

    await this.ormRepositoryTools.save(tool);

    return tool;
  }
}

export default ToolsRepository;