//24.08.07  뤼튼 02. prisma 라이브러리 를 따로 뗴어냄, 반복 안하기위해
// 길지 않아서 굳이뺄필요..


import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default prisma;
