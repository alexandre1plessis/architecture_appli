<?php

declare(strict_types=1);

use App\Application\Actions\User\ListUsersAction;
use App\Application\Actions\User\ViewUserAction;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\App;
use Slim\Interfaces\RouteCollectorProxyInterface as Group;

return function (App $app) {
    $app->options('/{routes:.*}', function (Request $request, Response $response) {
        // CORS Pre-Flight OPTIONS Request Handler
        return $response;
    });

    $app->get('/', function (Request $request, Response $response) {
        $response->getBody()->write('Hello world!');
        return $response;
    });

    //routes qui renvoit la liste des tâches
    $app->get('/tasks', function (Request $request, Response $response) {
        $response->getBody()->write('Liste des tâches');
        return $response;
    });

    //routes qui renvoit une tâche
    $app->get('/tasks/{id}', function (Request $request, Response $response, array $args) {
        $response->getBody()->write('Tâche n°' . $args['id']);
        return $response;
    });

    //routes qui ajoute une tâche
    $app->post('/tasks', function (Request $request, Response $response) {
        $response->getBody()->write('Ajout d\'une tâche');
        return $response;
    });

    //routes qui modifie une tâche
    $app->put('/tasks/{id}', function (Request $request, Response $response, array $args) {
        $response->getBody()->write('Modification de la tâche n°' . $args['id']);
        return $response;
    });

    //routes qui supprime une tâche
    $app->delete('/tasks/{id}', function (Request $request, Response $response, array $args) {
        $response->getBody()->write('Suppression de la tâche n°' . $args['id']);
        return $response;
    });

    //routes qui renvoit les tâches du jour
    $app->get('/tasks/today', function (Request $request, Response $response) {
        $response->getBody()->write('Liste des tâches du jour');
        return $response;
    });

    //routes qui renvoit les tâches de la semaine
    $app->get('/tasks/week', function (Request $request, Response $response) {
        $response->getBody()->write('Liste des tâches de la semaine');
        return $response;
    });

    //routes qui renvoit les tâches du mois
    $app->get('/tasks/month', function (Request $request, Response $response) {
        $response->getBody()->write('Liste des tâches du mois');
        return $response;
    });

    //routes qui renvoit les tâches selon le jour
    $app->get('/tasks/{day}', function (Request $request, Response $response, array $args) {
        $response->getBody()->write('Liste des tâches du ' . $args['day']);
        return $response;
    });



};
