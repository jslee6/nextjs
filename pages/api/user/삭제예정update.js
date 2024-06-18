const updateUser = await prisma.user.update({
    where: {
      id: '2564a45f-af03-46a2-8789-9ec806bfc113',
    },
    data: {
      address: '테스트주소',
    },
  });