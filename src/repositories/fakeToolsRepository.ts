import Tools from '../schemas/Tools';
import {getMongoRepository, MongoRepository, EntityRepository} from 'typeorm';
import InterfaceToolsRepository from './InterfaceToolsRepository';

@EntityRepository(Tools)
class ToolsRepository {
  private ormRepositoryTools: MongoRepository<Tools>;

  constructor(){
    this.ormRepositoryTools = getMongoRepository(Tools);
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