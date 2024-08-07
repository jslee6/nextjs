//24.08.07  뤼튼 02. prisma 라이브러리 를 따로 뗴어냄, 반복 안하기위해

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default prisma;
