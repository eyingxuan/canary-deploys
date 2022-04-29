import { Router } from 'express';

const router = Router();

const getRandomInt = (max) => {
	return Math.floor(Math.random() * max);
}

router.get('/', (req, res) => {
	res.send("<!DOCTYPE html><html><head><title>Version B</title></head><body><h1>Version B</h1><p>This is version B of our CIS 188 project.</p></body></html>");
});

export default router;