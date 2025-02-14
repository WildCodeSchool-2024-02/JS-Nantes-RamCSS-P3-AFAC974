--
-- Database : `web_developer`
--
-- CREATE DATABASE `web_developer`;
-- --------------------------------------------------------

--
-- Table structure `project`
--

CREATE TABLE `project` (
	`name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
	`h2` varchar(150) NOT NULL,
	`h3` varchar(150) NOT NULL,
	`description` varchar(1500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
	`url` varchar(100) NOT NULL,
	`screen` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
	`alt` varchar(100) NOT NULL,
  PRIMARY KEY (`name`)
);

--
-- Unloading data from the table `project`
--

INSERT INTO `project`
(
	`name`,
	`h2`,
	`h3`,
	`description`,
	`url`,
	`screen`,
	`alt`
)
VALUES
(
	'la-rose-de-l-orient',
	'sous-titre h2', 'sous-titre h3',
	'description du site',
	'htt://robe-de-l-orient.com',
	'la-rose-de-l-orient.jpg',
	'description de l&apos;image du site'
),
(
	'afac974',
	'sous-titre h2',
	'sous-titre h3',
	'description du site',
	'https://afac974.nantes-1.wilders.dev/',
	'afac974.jpg', 'description de l&apos;image du site'
),
(
	'carte-postale', 
	'sous-titre h2',
	'sous-titre h3', 
	'description du site', 
	'carte-postale.html',
	'carte-postale.jpg',
	'description de l&apos;image'
	),
(
	'faketory',
	'sous-titre h2', 
	'sous-titre h3',
	'description du site',
	'faketory.html',
	'faketory.jpg',
	'description de l&apos;image'
	),
(
	'robe-et-vetement',
	'sous-titre h2',
	'sous-titre h3',
	'description du site',
	'http://robedelorient.com/projet',
	'robe-et-vetement.jpg',
	'description de l&apos;image'
	),
(
	'the-wild-fork',
	'sous-titre h2',
	'sous-titre h3',
	'description du site',
	'http://robedelorient.com/the-wild-fork',
	'the-wild-fork.jpg',
	'description de l&apos;image'
	);