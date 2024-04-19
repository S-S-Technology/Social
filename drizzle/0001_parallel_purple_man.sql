CREATE TABLE `posts` (
	`id` varchar(100) NOT NULL DEFAULT (uuid()),
	`title` text,
	`description` text,
	`postby` text,
	CONSTRAINT `posts_id` PRIMARY KEY(`id`)
);
