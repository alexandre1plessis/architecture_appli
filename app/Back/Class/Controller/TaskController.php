<?php

include '../Modele/ITask.php';
include '../Controller/BDDController.php';

class TaskController
{
    public static function getAllTask(): array
    {
        return [];
    }

    public static function getTaskById(): ITask
    {
        return new Task();
    }

    public static function getTaskByProject(): array
    {
        return [];
    }

    public static function getTaskByColor(): array
    {
        return [];
    }

    public static function getTimeByDay($day): string
    {
        return '';
    }

     public static function getTaskByDay(string $date): array
     {
         return [];
     }

    /**
     * @param string $name
     * @param string $description
     * @param int|null $id_project
     * @param int|null $id_task_parent
     * @param string $color
     * @param int|null $order
     * @return bool|mysqli_result
     */
    public static function setTask(string $name, string $description = '', int $id_project = null, int $id_task_parent = null, string $color = '', int $order = null)
    {
        $bdd = BDDController::getInstance();
        $connect = $bdd->getConnect();
        $sql = "INSERT INTO task(name,description,id_projet,id_task_parent,color,order)
                        VALUES('". $name ."',
                               '". $description."'
                               ,'" . $id_project . "'
                               ,'" . $id_task_parent . "'
                               ," . $color . ",
                               '" . $order . "' )";
        return $connect->query($sql);
    }

    public static function deleteTask($id)
    {
        $bdd = BDDController::getInstance();
        $connect = $bdd->getConnect();
        $sql = "DELETE FROM task WHERE id=". $id ;
        return $connect->query($sql);
    }

    public static function updateTask($id,string $name,string $description = '',int $id_project = null,int $id_task_parent = null,string $color = '',int $order = null)
    {
        $bdd = BDDController::getInstance();
        $connect = $bdd->getConnect();
        $sql = "UPDATE task 
                SET name='". $name ."', 
                    description='". $description ."',
                    id_projet='". $id_project ."',
                    id_task_parent='". $id_task_parent ."',
                    color='". $color ."',
                    order='". $order ."',
                WHERE id=". $id;
        return $connect->query($sql);
    }
}