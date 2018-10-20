-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Oct 20, 2018 at 01:34 PM
-- Server version: 5.7.21
-- PHP Version: 7.1.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `takmicarko`
--

-- --------------------------------------------------------

--
-- Table structure for table `organizuje`
--

DROP TABLE IF EXISTS `organizuje`;
CREATE TABLE IF NOT EXISTS `organizuje` (
  `organizatorID` int(10) NOT NULL,
  `takmicenjeID` int(10) NOT NULL,
  KEY `organizatorID` (`organizatorID`),
  KEY `takmicenjeID` (`takmicenjeID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `organizuje`
--

INSERT INTO `organizuje` (`organizatorID`, `takmicenjeID`) VALUES
(1, 18),
(25, 21),
(1, 23),
(1, 25);

-- --------------------------------------------------------

--
-- Table structure for table `predmet`
--

DROP TABLE IF EXISTS `predmet`;
CREATE TABLE IF NOT EXISTS `predmet` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `naziv` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `predmet`
--

INSERT INTO `predmet` (`id`, `naziv`) VALUES
(1, 'Srpski Jezik'),
(2, 'Matematika'),
(5, 'Istorija'),
(6, 'Programiranje'),
(7, 'Hemija');

-- --------------------------------------------------------

--
-- Table structure for table `registracija`
--

DROP TABLE IF EXISTS `registracija`;
CREATE TABLE IF NOT EXISTS `registracija` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ime` varchar(25) NOT NULL,
  `prezime` varchar(25) NOT NULL,
  `korisnicko_ime` varchar(25) NOT NULL,
  `sifra` varchar(25) NOT NULL,
  `jmbg` varchar(13) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `skolaID` int(11) DEFAULT NULL,
  `role` int(11) DEFAULT NULL,
  `odobreno` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `skolaID` (`skolaID`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `registracija`
--

INSERT INTO `registracija` (`id`, `ime`, `prezime`, `korisnicko_ime`, `sifra`, `jmbg`, `email`, `skolaID`, `role`, `odobreno`) VALUES
(1, 'Petar', 'Vasiljevic', 'pera', '1', '123434', 'petarv96@mail.com', 1, 2, 1),
(12, 'Milos', 'Kosanin', 'somiii', '43211234', '3213123', 'somi@gmail.com', 1, 3, 1),
(13, 'Goran', 'Manigoda', 'mana', '333333', '213123', 'gogo@yahoo.com', 1, 2, 0),
(20, 'Marija', 'Radisavljevic', 'maja', 'profa123', '112312', 'maja@yahoo.com', 1, 3, 0),
(25, 'Zorana', 'Mikic', 'zoki', '1', '1232312', 'zoki@gmail.com', 1, 1, 1),
(27, 'Mihajlo', 'Nenadic', 'nesa', '123456', '32312412', 'nead@gmail.com', 1, 1, 0),
(28, 'Borisalv', 'Stefanovic', 'bokistef96', 'boki1000', '11111', 'bokistef96@yahoo.com', 1, 3, 1),
(47, 'Stefan', 'Cvetkovic', 'fiste', '111111', '32525235', 'stegi@ga;m/com', 3, 3, 1),
(48, 'Katarina', 'Mirkovic', 'kaca', 'kaca123', '2142321231342', 'kaca@gmail.com', 4, 3, 0),
(49, 'Joca', 'Markovic', 'jocaaa', '111111', '215511123', 'mioanfa', 4, 3, 1),
(53, 'Nikola', 'Mazic', 'nidza', '111111', '222222', 'affaffafa', 2, 3, 1),
(54, 'Miroslav', 'Petrovic', 'miroslav', 'miroslav', '2312312213', 'miki@gmail.com', 3, 3, 1);

-- --------------------------------------------------------

--
-- Table structure for table `skola`
--

DROP TABLE IF EXISTS `skola`;
CREATE TABLE IF NOT EXISTS `skola` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `naziv` varchar(50) NOT NULL,
  `grad` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `skola`
--

INSERT INTO `skola` (`id`, `naziv`, `grad`) VALUES
(1, 'Stevan Sremac', 'Nis'),
(2, 'Gimnazija Bora stankovic', 'Nis'),
(3, 'Nikola Tesla', 'Novi Sad'),
(4, 'Desanka Maksimovic', 'Beograd');

-- --------------------------------------------------------

--
-- Table structure for table `takmicar`
--

DROP TABLE IF EXISTS `takmicar`;
CREATE TABLE IF NOT EXISTS `takmicar` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `ime` varchar(25) NOT NULL,
  `prezime` varchar(25) NOT NULL,
  `jmbg` varchar(13) DEFAULT NULL,
  `mail` varchar(30) DEFAULT NULL,
  `skolaID` int(10) DEFAULT NULL,
  `grad` varchar(60) NOT NULL,
  `datumRodjenja` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `takmicar_ibfk_2` (`skolaID`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `takmicar`
--

INSERT INTO `takmicar` (`id`, `ime`, `prezime`, `jmbg`, `mail`, `skolaID`, `grad`, `datumRodjenja`) VALUES
(1, 'Borislav', 'Stefanovic', '123434555', 'bokistef96@yahoo.com', 1, 'Nis', '1998-02-13'),
(3, 'Petar', 'Vasiljevic', '1908999323242', 'pecav96@gmail.com', 2, 'Novi sad', '1996-02-13'),
(5, 'Djordje', 'Stefanovic', '18323234221', 'djole@gmail.com', 1, 'Nis', '1999-02-13'),
(6, 'Dragutin', 'Milinkovic-savic', '2321421521433', 'milinkovic@gmail.com', 4, 'Nis', '1999-02-21'),
(26, 'Stefan', 'Stefanovic', '1888942321312', 'boki@gmail.com', 3, 'Nis', '1997-06-09'),
(30, 'Ninoslav', 'Petrovic', '24125124', 'iomnfiaon@fa.com', 3, 'Novi sad', '2013-06-18'),
(31, 'Petar', 'Vasiljevic', '124124124141', 'trebinjac@gmail.com', 4, 'Trebinje', '1996-08-19'),
(32, 'sdasdasd', 'dasdas', 'r3525235', 'gfasgagfas', 1, 'fafsaf', '2018-10-18');

-- --------------------------------------------------------

--
-- Table structure for table `takmicenje`
--

DROP TABLE IF EXISTS `takmicenje`;
CREATE TABLE IF NOT EXISTS `takmicenje` (
  `Id` int(5) NOT NULL AUTO_INCREMENT,
  `predmetID` int(50) NOT NULL,
  `grad` varchar(25) NOT NULL,
  `godina` varchar(4) NOT NULL,
  `tip` int(1) NOT NULL,
  `razred` int(11) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `takmicenje`
--

INSERT INTO `takmicenje` (`Id`, `predmetID`, `grad`, `godina`, `tip`, `razred`) VALUES
(1, 5, 'Nis', '2016', 1, 1),
(2, 2, 'Beograd', '2017', 2, 3),
(4, 5, 'Kragujevac', '1999', 1, 5),
(18, 1, 'Nis', '2017', 2, 1),
(19, 5, 'Novi Sad', '2018', 3, 0),
(20, 2, 'Sombor', '2015', 2, 0),
(21, 1, 'Nis', '2017', 1, 3),
(22, 5, 'Novi Sad', '2017', 2, 2),
(23, 7, 'Nis', '2018', 1, 8),
(24, 5, 'Leskovac', '2016', 2, 7),
(25, 2, 'Novi Sad', '2017', 2, 3);

-- --------------------------------------------------------

--
-- Table structure for table `takmici_se`
--

DROP TABLE IF EXISTS `takmici_se`;
CREATE TABLE IF NOT EXISTS `takmici_se` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `takmicarID` int(10) NOT NULL,
  `takmicenjeID` int(10) NOT NULL,
  `nagrada` varchar(15) NOT NULL DEFAULT 'nema',
  `br_poena` float NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `takmicarID` (`takmicarID`),
  KEY `takmicenjeID` (`takmicenjeID`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `takmici_se`
--

INSERT INTO `takmici_se` (`id`, `takmicarID`, `takmicenjeID`, `nagrada`, `br_poena`) VALUES
(13, 5, 1, '1', 99),
(15, 1, 1, '1', 1),
(16, 1, 1, '1', 22),
(57, 26, 1, '2', 33),
(58, 26, 1, '2', 88),
(59, 6, 1, '2', 88),
(62, 1, 1, '4', 77),
(65, 3, 19, '2', 99),
(67, 6, 23, '1', 78),
(68, 26, 23, '2', 68),
(69, 3, 23, '1', 88),
(70, 30, 1, '1', 44);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `organizuje`
--
ALTER TABLE `organizuje`
  ADD CONSTRAINT `organizuje_ibfk_1` FOREIGN KEY (`organizatorID`) REFERENCES `registracija` (`id`),
  ADD CONSTRAINT `organizuje_ibfk_2` FOREIGN KEY (`takmicenjeID`) REFERENCES `takmicenje` (`Id`);

--
-- Constraints for table `takmicar`
--
ALTER TABLE `takmicar`
  ADD CONSTRAINT `takmicar_ibfk_2` FOREIGN KEY (`skolaID`) REFERENCES `skola` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `takmici_se`
--
ALTER TABLE `takmici_se`
  ADD CONSTRAINT `takmici_se_ibfk_1` FOREIGN KEY (`takmicarID`) REFERENCES `takmicar` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `takmici_se_ibfk_2` FOREIGN KEY (`takmicenjeID`) REFERENCES `takmicenje` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
