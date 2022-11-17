import { Router } from 'express';
import { getProducts } from '@controllers/product.controller';
import { getProductsSchema } from '@schemas/product.schema';
import { validatorHandler } from '@lib/helpers';

const router = Router();

router.get('/', validatorHandler(getProductsSchema, 'query'), getProducts);

export default router;
