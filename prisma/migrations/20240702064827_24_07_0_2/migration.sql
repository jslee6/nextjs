/*
  Warnings:

  - Made the column `userId` on table `account` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `account` required. This step will fail if there are existing NULL values in that column.
  - Made the column `role` on table `account` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `account` MODIFY `userId` VARCHAR(191) NOT NULL,
    MODIFY `password` VARCHAR(191) NOT NULL,
    MODIFY `role` VARCHAR(191) NOT NULL;
