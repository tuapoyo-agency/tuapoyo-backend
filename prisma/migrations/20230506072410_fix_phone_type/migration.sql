/*
  Warnings:

  - You are about to alter the column `phone` on the `Person` table. The data in that column could be lost. The data in that column will be cast from `VarChar(45)` to `Int`.

*/
-- AlterTable
ALTER TABLE `Person` MODIFY `phone` INTEGER NOT NULL;
