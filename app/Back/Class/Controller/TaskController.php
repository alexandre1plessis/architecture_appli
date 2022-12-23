<?php

include '../Modele/ITask.php';
include '../Controller/BDDController.php';

class TaskController
{
    public function getAllTask(): array
    {
        return [];
    }

    public function getTaskById(): ITask
    {
        return new Task();
    }

    public function getTaskByProject(): array
    {
        return [];
    }

    public function getTaskByColor(): array
    {
        return [];
    }

    public function getTimeByDay($day): string
    {
        return '';
    }

     public function getTaskByDay(string $date): array
     {
         return [];
     }

    public function setTask(string $name,string $description = '',int $id_project = null,int $id_task_parent = null,string $color = '',int $order = null)
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

    public function deleteTask($id)
    {
        $bdd = BDDController::getInstance();
        $connect = $bdd->getConnect();
        $sql = "DELETE FROM task WHERE id=". $id ;
        return $connect->query($sql);
    }

    public function updateTask($id,string $name,string $description = '',int $id_project = null,int $id_task_parent = null,string $color = '',int $order = null)
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