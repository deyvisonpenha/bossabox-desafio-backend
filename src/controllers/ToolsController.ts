import Tools from '../schemas/Tools';
import {Request, Response} from 'express';

module.exports = {
  async index(){

  },

  async store(req: Request, res: Response){
    const {title, link, description, tags} = req.body;
  }
}