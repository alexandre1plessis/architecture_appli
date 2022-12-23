<?php

include '../Modele/ITask.php';

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
}