<?php

include '../Modele/Project.php';
include 'BDDController.php';

class ProjectController
{
    /**
     * @return array
     */
    public static function getAllProject(): array
    {
        $retour = [];
        $bdd = BDDController::getInstance()->getConnect();
        $sql = "SELECT *
                FROM projet"  ;
        $projets = $bdd->query($sql);
        foreach ($projets as $projet) {
            $newProjet = new Project($projet['id'],$projet['name']);
            $retour[] = $newProjet;
        }
        return $retour;
    }

    /**
     * @param int $id
     * @return Project
     */
    public static function getProjectById(int $id): Project
    {
        $bdd = BDDController::getInstance()->getConnect();
        $sql = "SELECT *
                FROM projet
                WHERE id=" . $id;
        $projet = $bdd->query($sql);
        return new Project($projet['id'],$projet['name']);
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
        $sql = "DELETE FROM projet WHERE id=". $id ;
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