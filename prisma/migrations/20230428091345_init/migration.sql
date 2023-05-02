-- CreateTable
CREATE TABLE `city` (
    `id_city` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `id_country` INTEGER NOT NULL,

    INDEX `fk_city_country_idx`(`id_country`),
    PRIMARY KEY (`id_city`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `country` (
    `id_country` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`id_country`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `person` (
    `id_person` INTEGER NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(45) NOT NULL,
    `last_name` VARCHAR(45) NOT NULL,
    `phone` VARCHAR(45) NOT NULL,
    `alternative_phone` VARCHAR(45) NULL,
    `dpi` INTEGER NOT NULL,
    `birthdate` DATE NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `id_city` INTEGER NOT NULL,
    `email` VARCHAR(45) NOT NULL,
    `date_added` DATETIME(0) NOT NULL,
    `date_modified` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id_person`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `city` ADD CONSTRAINT `fk_city_country` FOREIGN KEY (`id_country`) REFERENCES `country`(`id_country`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `person` ADD CONSTRAINT `fk_person_city` FOREIGN KEY (`id_city`) REFERENCES `city`(`id_city`) ON DELETE NO ACTION ON UPDATE NO ACTION;
