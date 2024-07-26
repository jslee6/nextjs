import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function updateAccount(userId, newData) {
  // 기존 계정 정보를 가져옵니다.
  const account = await prisma.account.findUnique({
    where: { userId },
  });

  if (!account) {
    throw new Error('Account not found');
  }

  // 히스토리 데이터 저장
  await prisma.accounthistory3.create({
    data: {
      accountId: account.id,
      email: account.email,
      role: account.role,
      password: account.password,
    },
  });

  // 계정 정보를 업데이트합니다.
  const updatedAccount = await prisma.account.update({
    where: { userId },
    data: newData,
  });

  return updatedAccount;
}
