import { Router } from 'express';
import { HeroController } from '../controllers/HeroController';

const heroRouter = Router();

const heroController = new HeroController();

heroRouter.get('/', (req, res) => heroController.getAllHeros(req, res)); // GET http://localhost:8080/api/heros
heroRouter.get('/:morceaudurl', (req, res) => heroController.getOneHeroById(req, res));// GET http://localhost:8080/api/heros/1
heroRouter.post('/', (req, res) => heroController.createNewHero(req, res)); // POST http://localhost:8080/api/heros
heroRouter.put('/:id', (req, res) => heroController.updateOneHero(req, res));
heroRouter.delete('/:id', (req, res) => heroController.deleteOneHero(req, res));

export default heroRouter;
