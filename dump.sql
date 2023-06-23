-- Valentina Studio --
-- MySQL dump --
-- ---------------------------------------------------------


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
-- ---------------------------------------------------------


-- CREATE DATABASE "comisionB2023" -------------------------
CREATE DATABASE IF NOT EXISTS `comisionB2023` CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `comisionB2023`;
-- ---------------------------------------------------------


-- CREATE TABLE "equipos" --------------------------------------
CREATE TABLE `equipos` ( 
	`id_equipo` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`nombre` VarChar( 100 ) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
	`id_tipo_equipo` Int( 11 ) NOT NULL,
	`id_modelo` Int( 11 ) NULL,
	`estado` Enum( 'A', 'B', 'C' ) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
	`serial` VarChar( 45 ) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL,
	`id_ubicacion` Int( 11 ) NULL,
	PRIMARY KEY ( `id_equipo` ) )
CHARACTER SET = latin1
COLLATE = latin1_swedish_ci
ENGINE = InnoDB
AUTO_INCREMENT = 10;
-- -------------------------------------------------------------


-- CREATE TABLE "fabricantes" ----------------------------------
CREATE TABLE `fabricantes` ( 
	`id_fabricante` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`nombre` VarChar( 45 ) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
	`estado` Enum( 'A', 'B' ) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL DEFAULT 'A',
	PRIMARY KEY ( `id_fabricante` ) )
CHARACTER SET = latin1
COLLATE = latin1_swedish_ci
ENGINE = InnoDB
AUTO_INCREMENT = 5;
-- -------------------------------------------------------------


-- CREATE TABLE "menu" -----------------------------------------
CREATE TABLE `menu` ( 
	`id_menu` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`nombre` VarChar( 45 ) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
	`href` VarChar( 45 ) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
	`id_rol` Int( 11 ) NOT NULL,
	PRIMARY KEY ( `id_menu` ) )
CHARACTER SET = latin1
COLLATE = latin1_swedish_ci
ENGINE = InnoDB
AUTO_INCREMENT = 7;
-- -------------------------------------------------------------


-- CREATE TABLE "modelos" --------------------------------------
CREATE TABLE `modelos` ( 
	`id_modelo` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`nombre` VarChar( 45 ) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
	`id_fabricante` Int( 11 ) NOT NULL,
	PRIMARY KEY ( `id_modelo` ) )
CHARACTER SET = latin1
COLLATE = latin1_swedish_ci
ENGINE = InnoDB
AUTO_INCREMENT = 9;
-- -------------------------------------------------------------


-- CREATE TABLE "roles" ----------------------------------------
CREATE TABLE `roles` ( 
	`id_rol` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`nombre` VarChar( 45 ) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
	`estado` Enum( 'A', 'B' ) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL DEFAULT 'A',
	PRIMARY KEY ( `id_rol` ) )
CHARACTER SET = latin1
COLLATE = latin1_swedish_ci
ENGINE = InnoDB
AUTO_INCREMENT = 4;
-- -------------------------------------------------------------


-- CREATE TABLE "tipos_equipo" ---------------------------------
CREATE TABLE `tipos_equipo` ( 
	`id_tipo_equipo` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`nombre` VarChar( 45 ) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
	`estado` Enum( 'A', 'B' ) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL DEFAULT 'A',
	PRIMARY KEY ( `id_tipo_equipo` ) )
CHARACTER SET = latin1
COLLATE = latin1_swedish_ci
ENGINE = InnoDB
AUTO_INCREMENT = 6;
-- -------------------------------------------------------------


-- CREATE TABLE "ubicaciones" ----------------------------------
CREATE TABLE `ubicaciones` ( 
	`id_ubicacion` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`nombre` VarChar( 45 ) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
	`estado` Enum( 'A', 'B' ) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL DEFAULT 'A',
	PRIMARY KEY ( `id_ubicacion` ) )
CHARACTER SET = latin1
COLLATE = latin1_swedish_ci
ENGINE = InnoDB
AUTO_INCREMENT = 5;
-- -------------------------------------------------------------


-- CREATE TABLE "usuarios" -------------------------------------
CREATE TABLE `usuarios` ( 
	`id_usuario` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`nombre` VarChar( 45 ) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
	`apellido` VarChar( 45 ) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
	`dni` Int( 11 ) NULL,
	`user` VarChar( 45 ) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
	`pass` VarChar( 45 ) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
	`correo` VarChar( 45 ) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL,
	`id_rol` Int( 11 ) NOT NULL,
	`estado` Enum( 'A', 'B' ) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT 'A',
	PRIMARY KEY ( `id_usuario` ) )
CHARACTER SET = latin1
COLLATE = latin1_swedish_ci
ENGINE = InnoDB
AUTO_INCREMENT = 3;
-- -------------------------------------------------------------


-- Dump data of "equipos" ----------------------------------
INSERT INTO `equipos`(`id_equipo`,`nombre`,`id_tipo_equipo`,`id_modelo`,`estado`,`serial`,`id_ubicacion`) VALUES 
( '3', 'EquipoDos', '3', '3', 'A', 'iu3', '2' ),
( '4', 'Equipotres', '2', '2', 'A', 'iu3', '1' ),
( '5', 'Equipocuatro', '3', '4', 'A', 'A123', '2' ),
( '6', 'EquipocCinco', '1', '1', 'A', 'A123', '1' ),
( '9', 'equoipo6', '1', NULL, 'A', NULL, '2' );
-- ---------------------------------------------------------


-- Dump data of "fabricantes" ------------------------------
INSERT INTO `fabricantes`(`id_fabricante`,`nombre`,`estado`) VALUES 
( '1', 'Fabrica1', 'A' ),
( '2', 'Fabrica2', 'B' ),
( '3', 'Fabrica3', 'A' ),
( '4', 'prueba1', 'A' );
-- ---------------------------------------------------------


-- Dump data of "menu" -------------------------------------
INSERT INTO `menu`(`id_menu`,`nombre`,`href`,`id_rol`) VALUES 
( '1', 'Modelos', '/modelos', '1' ),
( '2', 'fabricantes', '/fabricantes', '1' ),
( '3', 'Tipos de equipos', '/tipos_equipos', '1' ),
( '4', 'Usuarios', '/usuarios', '1' ),
( '5', 'Equipos', '/equipos', '1' ),
( '6', 'Equipos', '/equipos', '2' );
-- ---------------------------------------------------------


-- Dump data of "modelos" ----------------------------------
INSERT INTO `modelos`(`id_modelo`,`nombre`,`id_fabricante`) VALUES 
( '1', 'Modelo1', '1' ),
( '2', 'Modelo2', '1' ),
( '3', 'Modelo3', '1' ),
( '4', 'Modelo1', '2' ),
( '5', 'ModeloDos', '2' ),
( '6', 'Modelo3', '3' ),
( '7', 'Modelo4', '3' );
-- ---------------------------------------------------------


-- Dump data of "roles" ------------------------------------
INSERT INTO `roles`(`id_rol`,`nombre`,`estado`) VALUES 
( '1', 'Admin', 'A' ),
( '2', 'Secretario', 'A' ),
( '3', 'Responsable', 'A' );
-- ---------------------------------------------------------


-- Dump data of "tipos_equipo" -----------------------------
INSERT INTO `tipos_equipo`(`id_tipo_equipo`,`nombre`,`estado`) VALUES 
( '1', 'Tipo1', 'A' ),
( '2', 'Tipo2', 'B' ),
( '3', 'tipoTres', 'A' ),
( '4', 'TipoNada', 'A' ),
( '5', 'prueba_tipo_uno', 'A' );
-- ---------------------------------------------------------


-- Dump data of "ubicaciones" ------------------------------
INSERT INTO `ubicaciones`(`id_ubicacion`,`nombre`,`estado`) VALUES 
( '1', 'piso1', 'A' ),
( '2', 'nombre del piso2', 'A' ),
( '4', 'prueba_ubicacion', 'A' );
-- ---------------------------------------------------------


-- Dump data of "usuarios" ---------------------------------
INSERT INTO `usuarios`(`id_usuario`,`nombre`,`apellido`,`dni`,`user`,`pass`,`correo`,`id_rol`,`estado`) VALUES 
( '1', 'Jose', 'Ponce', NULL, 'jponce', 'jponce', 'albertojoseponce@gmail.com', '1', 'A' ),
( '2', 'Martin', 'Zapata', NULL, 'mzapata', 'mzapata', 'prueba@gmail.com', '2', 'A' );
-- ---------------------------------------------------------


-- CREATE INDEX "fk_equipos_modelos" ---------------------------
CREATE INDEX `fk_equipos_modelos` USING BTREE ON `equipos`( `id_modelo` );
-- -------------------------------------------------------------


-- CREATE INDEX "fk_equipos_tipos_equipo" ----------------------
CREATE INDEX `fk_equipos_tipos_equipo` USING BTREE ON `equipos`( `id_tipo_equipo` );
-- -------------------------------------------------------------


-- CREATE INDEX "fk_equipos_ubicaciones" -----------------------
CREATE INDEX `fk_equipos_ubicaciones` USING BTREE ON `equipos`( `id_ubicacion` );
-- -------------------------------------------------------------


-- CREATE INDEX "fk_modelos_fabricantes" -----------------------
CREATE INDEX `fk_modelos_fabricantes` USING BTREE ON `modelos`( `id_fabricante` );
-- -------------------------------------------------------------


-- CREATE LINK "fk_equipos_modelos" ----------------------------
ALTER TABLE `equipos`
	ADD CONSTRAINT `fk_equipos_modelos` FOREIGN KEY ( `id_modelo` )
	REFERENCES `modelos`( `id_modelo` )
	ON DELETE Restrict
	ON UPDATE Restrict;
-- -------------------------------------------------------------


-- CREATE LINK "fk_equipos_tipos_equipo" -----------------------
ALTER TABLE `equipos`
	ADD CONSTRAINT `fk_equipos_tipos_equipo` FOREIGN KEY ( `id_tipo_equipo` )
	REFERENCES `tipos_equipo`( `id_tipo_equipo` )
	ON DELETE Restrict
	ON UPDATE Restrict;
-- -------------------------------------------------------------


-- CREATE LINK "fk_equipos_ubicaciones" ------------------------
ALTER TABLE `equipos`
	ADD CONSTRAINT `fk_equipos_ubicaciones` FOREIGN KEY ( `id_ubicacion` )
	REFERENCES `ubicaciones`( `id_ubicacion` )
	ON DELETE Restrict
	ON UPDATE Restrict;
-- -------------------------------------------------------------


-- CREATE LINK "fk_modelos_fabricantes" ------------------------
ALTER TABLE `modelos`
	ADD CONSTRAINT `fk_modelos_fabricantes` FOREIGN KEY ( `id_fabricante` )
	REFERENCES `fabricantes`( `id_fabricante` )
	ON DELETE Restrict
	ON UPDATE Restrict;
-- -------------------------------------------------------------


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
-- ---------------------------------------------------------


