import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    if (getRandomInt(10) < 2) {	
		res.status(500).send('This Version is supposed to fail 20% of the time.');
	} else {
		res.send("<!DOCTYPE html><html><head><title>Version C</title></head><body><h1>Version C</h1><p>This is version C of our CIS 188 project.</p></body></html>");
	}
});

export default router;