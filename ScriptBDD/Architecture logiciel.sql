CREATE TABLE `projet` (
  `id` bigint UNIQUE,
  `name` varchar(50) NOT NULL
);

CREATE TABLE `task` (
  `id` bigint UNIQUE,
  `name` varchar(50) NOT NULL,
  `description` text,
  `id_projet` bigint,
  `id_task_parent` bigint,
  `color` varchar(50),
  `order` int,
  PRIMARY KEY (`id_projet`, `id_task_parent`)
);

CREATE TABLE `association_day_time` (
  `id` bigint UNIQUE,
  `id_day` bigint,
  `id_task` bigint,
  `total_time` time,
  `tempory_time` time,
  PRIMARY KEY (`id_day`, `id_task`)
);

CREATE TABLE `day` (
  `id` bigint,
  `day` date
);

ALTER TABLE `task` ADD FOREIGN KEY (`id_projet`) REFERENCES `projet` (`id`);

ALTER TABLE `task` ADD FOREIGN KEY (`id_task_parent`) REFERENCES `task` (`id`);

ALTER TABLE `association_day_time` ADD FOREIGN KEY (`id_task`) REFERENCES `task` (`id`);

ALTER TABLE `association_day_time` ADD FOREIGN KEY (`id_day`) REFERENCES `day` (`id`);
