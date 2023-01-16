<?php

include '../Modele/Project.php';
include '../Controller/BDDController.php';

class ProjectController
{
    /**
     * @return array
     */
    public static function getAllProject(): array
    {
        return [];
    }

    /**
     * @param int $id
     * @return Project
     */
    public static function getProjectById(int $id): Project
    {
        return new Project();
    }

    /**
     * @param $name
     * @return bool|mysqli_result
     */
    public static function setNewProject(string $name)
    {
        $bdd = BDDController::getInstance();
        $connect = $bdd->getConnect();
        $sql = "INSERT INTO projet(name)
                        VALUES('". $name ."')";
        return $connect->query($sql);
    }

    /**
     * @param int $id
     * @return bool|mysqli_result
     */
    public static function deleteProject(int $id)
    {
        $bdd = BDDController::getInstance();
        $connect = $bdd->getConnect();
        $sql = "DELETE FROM project WHERE id=". $id ;
        return $connect->query($sql);
    }

    /**
     * @param int $id
     * @param string $name
     * @return bool|mysqli_result
     */
    public static function updateProject(int $id, string $name)
    {
        $bdd = BDDController::getInstance();
        $connect = $bdd->getConnect();
        $sql = "UPDATE task 
                SET name='". $name ."'
                WHERE id=". $id;
        return $connect->query($sql);
    }
}