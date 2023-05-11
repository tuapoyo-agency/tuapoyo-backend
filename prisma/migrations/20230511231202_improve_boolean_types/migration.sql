/*
  Warnings:

  - You are about to alter the column `can_read` on the `Candidate` table. The data in that column could be lost. The data in that column will be cast from `Int` to `TinyInt`.
  - You are about to alter the column `can_write` on the `Candidate` table. The data in that column could be lost. The data in that column will be cast from `Int` to `TinyInt`.
  - You are about to alter the column `hand_wash` on the `Candidate` table. The data in that column could be lost. The data in that column will be cast from `Int` to `TinyInt`.
  - You are about to alter the column `washing_machine` on the `Candidate` table. The data in that column could be lost. The data in that column will be cast from `Int` to `TinyInt`.
  - You are about to alter the column `iron` on the `Candidate` table. The data in that column could be lost. The data in that column will be cast from `Int` to `TinyInt`.
  - You are about to alter the column `stove` on the `Candidate` table. The data in that column could be lost. The data in that column will be cast from `Int` to `TinyInt`.
  - You are about to alter the column `coffee_maker` on the `Candidate` table. The data in that column could be lost. The data in that column will be cast from `Int` to `TinyInt`.
  - You are about to alter the column `microwave` on the `Candidate` table. The data in that column could be lost. The data in that column will be cast from `Int` to `TinyInt`.
  - You are about to alter the column `blender` on the `Candidate` table. The data in that column could be lost. The data in that column will be cast from `Int` to `TinyInt`.
  - You are about to alter the column `children_care_experience` on the `Candidate` table. The data in that column could be lost. The data in that column will be cast from `Int` to `TinyInt`.
  - You are about to alter the column `tattoos` on the `Candidate` table. The data in that column could be lost. The data in that column will be cast from `Int` to `TinyInt`.
  - You are about to alter the column `pregnant` on the `Candidate` table. The data in that column could be lost. The data in that column will be cast from `Int` to `TinyInt`.
  - You are about to alter the column `disability` on the `Candidate` table. The data in that column could be lost. The data in that column will be cast from `Int` to `TinyInt`.
  - You are about to alter the column `pet_care` on the `Candidate` table. The data in that column could be lost. The data in that column will be cast from `Int` to `TinyInt`.
  - You are about to alter the column `uniform` on the `Candidate` table. The data in that column could be lost. The data in that column will be cast from `Int` to `TinyInt`.
  - You are about to alter the column `children_care` on the `Job` table. The data in that column could be lost. The data in that column will be cast from `Int` to `TinyInt`.
  - You are about to alter the column `pet_care` on the `Job` table. The data in that column could be lost. The data in that column will be cast from `Int` to `TinyInt`.
  - You are about to alter the column `active` on the `Person` table. The data in that column could be lost. The data in that column will be cast from `Int` to `TinyInt`.

*/
-- AlterTable
ALTER TABLE `Candidate` MODIFY `can_read` BOOLEAN NOT NULL,
    MODIFY `can_write` BOOLEAN NOT NULL,
    MODIFY `hand_wash` BOOLEAN NOT NULL,
    MODIFY `washing_machine` BOOLEAN NOT NULL,
    MODIFY `iron` BOOLEAN NOT NULL,
    MODIFY `stove` BOOLEAN NOT NULL,
    MODIFY `coffee_maker` BOOLEAN NOT NULL,
    MODIFY `microwave` BOOLEAN NOT NULL,
    MODIFY `blender` BOOLEAN NOT NULL,
    MODIFY `children_care_experience` BOOLEAN NOT NULL,
    MODIFY `tattoos` BOOLEAN NOT NULL,
    MODIFY `pregnant` BOOLEAN NOT NULL,
    MODIFY `disability` BOOLEAN NOT NULL,
    MODIFY `pet_care` BOOLEAN NOT NULL,
    MODIFY `uniform` BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE `Job` MODIFY `children_care` BOOLEAN NOT NULL,
    MODIFY `pet_care` BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE `Person` MODIFY `active` BOOLEAN NOT NULL;
