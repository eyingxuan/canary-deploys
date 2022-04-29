import { Router } from 'express';
import path from 'path';

const router = Router();

router.get('/', (req, res) => {
    res.send("<!DOCTYPE html><html><head><title>Version A</title></head><body><h1>Version A</h1><p>This is version A of our CIS 188 project.</p></body></html>");
});

export default router;