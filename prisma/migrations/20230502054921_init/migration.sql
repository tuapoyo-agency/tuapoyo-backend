/*
  Warnings:

  - You are about to drop the `city` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `country` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `person` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `city` DROP FOREIGN KEY `fk_city_country`;

-- DropForeignKey
ALTER TABLE `person` DROP FOREIGN KEY `fk_person_city`;

-- DropTable
DROP TABLE `city`;

-- DropTable
DROP TABLE `country`;

-- DropTable
DROP TABLE `person`;

-- CreateTable
CREATE TABLE `City` (
    `id_city` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `id_country` INTEGER NOT NULL,

    INDEX `fk_city_country_idx`(`id_country`),
    PRIMARY KEY (`id_city`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Country` (
    `id_country` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`id_country`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Gender` (
    `id_gender` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`id_gender`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Person` (
    `id_person` INTEGER NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(45) NOT NULL,
    `last_name` VARCHAR(45) NOT NULL,
    `phone` VARCHAR(45) NOT NULL,
    `dpi` INTEGER NOT NULL,
    `email` VARCHAR(45) NOT NULL,
    `profilePic` VARCHAR(255) NULL,
    `id_gender` INTEGER NOT NULL,
    `active` INTEGER NOT NULL,
    `date_added` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `date_modified` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `fk_person_gender_idx`(`id_gender`),
    PRIMARY KEY (`id_person`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Marital_Status` (
    `id_marital_status` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`id_marital_status`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Candidate` (
    `id_candidate` INTEGER NOT NULL AUTO_INCREMENT,
    `id_person` INTEGER NOT NULL,
    `birthdate` DATE NOT NULL,
    `id_city_born` INTEGER NOT NULL,
    `id_city_live` INTEGER NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `latitude` DECIMAL(18, 15) NOT NULL,
    `longitude` DECIMAL(18, 15) NOT NULL,
    `id_marital_status` INTEGER NOT NULL,
    `id_work_schedule` INTEGER NOT NULL,
    `children_no` INTEGER NOT NULL,
    `children_description` VARCHAR(255) NULL,
    `can_read` INTEGER NOT NULL,
    `can_write` INTEGER NOT NULL,
    `yoe` INTEGER NOT NULL,
    `yoe_description` VARCHAR(255) NULL,
    `cook_level` INTEGER NOT NULL,
    `hand_wash` INTEGER NOT NULL,
    `washing_machine` INTEGER NOT NULL,
    `iron` INTEGER NOT NULL,
    `stove` INTEGER NOT NULL,
    `coffee_maker` INTEGER NOT NULL,
    `microwave` INTEGER NOT NULL,
    `blender` INTEGER NOT NULL,
    `children_care_experience` INTEGER NOT NULL,
    `children_care_description` VARCHAR(255) NULL,
    `tattoos` INTEGER NOT NULL,
    `pregnant` INTEGER NOT NULL,
    `disability` INTEGER NOT NULL,
    `disability_description` VARCHAR(255) NULL,
    `pet_care` INTEGER NOT NULL,
    `uniform` INTEGER NOT NULL,
    `availability` INTEGER NOT NULL,
    `expected_salary` DECIMAL(15, 2) NULL,
    `date_added` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `date_modified` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `Candidate_id_person_key`(`id_person`),
    INDEX `fk_candidate_person_idx`(`id_person`),
    INDEX `fk_candidate_city_born_idx`(`id_city_born`),
    INDEX `fk_candidate_city_live_idx`(`id_city_live`),
    INDEX `fk_candidate_marital_status_idx`(`id_marital_status`),
    INDEX `fk_candidate_work_schedule_idx`(`id_work_schedule`),
    PRIMARY KEY (`id_candidate`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Work_Schedule` (
    `id_work_schedule` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`id_work_schedule`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Employer` (
    `id_employer` INTEGER NOT NULL AUTO_INCREMENT,
    `id_person` INTEGER NOT NULL,
    `date_added` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `date_modified` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `Employer_id_person_key`(`id_person`),
    INDEX `fk_employer_person_idx`(`id_person`),
    PRIMARY KEY (`id_employer`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Job` (
    `id_job` INTEGER NOT NULL AUTO_INCREMENT,
    `id_employer` INTEGER NOT NULL,
    `id_city` INTEGER NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `latitude` DECIMAL(18, 15) NOT NULL,
    `longitude` DECIMAL(18, 15) NOT NULL,
    `id_work_schedule` INTEGER NOT NULL,
    `children_care` INTEGER NOT NULL,
    `pet_care` INTEGER NOT NULL,
    `min_salary` DECIMAL(15, 2) NOT NULL,
    `max_salary` DECIMAL(15, 2) NOT NULL,
    `job_description` VARCHAR(255) NULL,
    `date_added` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `date_modified` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `fk_job_employer_idx`(`id_employer`),
    INDEX `fk_job_city_idx`(`id_city`),
    INDEX `fk_job_work_schedule_idx`(`id_work_schedule`),
    PRIMARY KEY (`id_job`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Message` (
    `id_message` INTEGER NOT NULL AUTO_INCREMENT,
    `id_job` INTEGER NOT NULL,
    `id_candidate` INTEGER NOT NULL,
    `date_added` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `fk_message_job_idx`(`id_job`),
    PRIMARY KEY (`id_message`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Applicant_Status` (
    `id_applicant_status` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`id_applicant_status`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Applicant` (
    `id_applicant` INTEGER NOT NULL AUTO_INCREMENT,
    `id_job` INTEGER NOT NULL,
    `id_candidate` INTEGER NOT NULL,
    `id_applicant_status` INTEGER NOT NULL,
    `date_added` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `fk_applicant_job_idx`(`id_job`),
    INDEX `fk_applicant_candidate_idx`(`id_candidate`),
    INDEX `fk_applicant_applicant_status_idx`(`id_applicant_status`),
    PRIMARY KEY (`id_applicant`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `City` ADD CONSTRAINT `fk_city_country` FOREIGN KEY (`id_country`) REFERENCES `Country`(`id_country`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Person` ADD CONSTRAINT `fk_person_gender` FOREIGN KEY (`id_gender`) REFERENCES `Gender`(`id_gender`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Candidate` ADD CONSTRAINT `fk_candidate_person` FOREIGN KEY (`id_person`) REFERENCES `Person`(`id_person`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Candidate` ADD CONSTRAINT `fk_person_city_born` FOREIGN KEY (`id_city_born`) REFERENCES `City`(`id_city`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Candidate` ADD CONSTRAINT `fk_person_city_live` FOREIGN KEY (`id_city_live`) REFERENCES `City`(`id_city`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Candidate` ADD CONSTRAINT `fk_person_marital_status` FOREIGN KEY (`id_marital_status`) REFERENCES `Marital_Status`(`id_marital_status`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Candidate` ADD CONSTRAINT `fk_person_id_work_schedule` FOREIGN KEY (`id_work_schedule`) REFERENCES `Work_Schedule`(`id_work_schedule`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Employer` ADD CONSTRAINT `fk_employee_person` FOREIGN KEY (`id_person`) REFERENCES `Person`(`id_person`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Job` ADD CONSTRAINT `fk_job_employer` FOREIGN KEY (`id_employer`) REFERENCES `Employer`(`id_employer`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Job` ADD CONSTRAINT `fk_job_city` FOREIGN KEY (`id_city`) REFERENCES `City`(`id_city`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Job` ADD CONSTRAINT `fk_job_id_work_schedule` FOREIGN KEY (`id_work_schedule`) REFERENCES `Work_Schedule`(`id_work_schedule`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Message` ADD CONSTRAINT `fk_message_job` FOREIGN KEY (`id_job`) REFERENCES `Job`(`id_job`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Message` ADD CONSTRAINT `fk_message_candidate` FOREIGN KEY (`id_candidate`) REFERENCES `Candidate`(`id_candidate`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Applicant` ADD CONSTRAINT `fk_applicant_job` FOREIGN KEY (`id_job`) REFERENCES `Job`(`id_job`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Applicant` ADD CONSTRAINT `fk_applicant_candidate` FOREIGN KEY (`id_candidate`) REFERENCES `Candidate`(`id_candidate`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Applicant` ADD CONSTRAINT `fk_applicant_applicant_status` FOREIGN KEY (`id_applicant_status`) REFERENCES `Applicant_Status`(`id_applicant_status`) ON DELETE NO ACTION ON UPDATE NO ACTION;
