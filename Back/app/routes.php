<?php

declare(strict_types=1);


use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\App;

return function (App $app) {
    $app->options('/{routes:.*}', function (Request $request, Response $response) {
        // CORS Pre-Flight OPTIONS Request Handler
        return $response;
    });

    $app->get('/', function (Request $request, Response $response) {
        $response->getBody()->write('Hello world!');
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

    //routes qui renvoit les tâches selon le jour
    $app->get('/tasks/day/{day}', function (Request $request, Response $response, array $args) {
        $response->getBody()->write('Liste des tâches du ' . $args['day']);
        return $response;
    });

    $app->get('/projets', function (Request $request, Response $response) {
        $response->getBody()->write('Liste des projet ');
        return $response;
    });

    $app->get('/projets/{id}', function (Request $request, Response $response, array $args) {
        $response->getBody()->write('Projet n°' . $args['id']);
        return $response;
    });

    $app->post('/projets', function (Request $request, Response $response) {
        $response->getBody()->write('Ajout d\'un projet');
        return $response;
    });

    $app->put('/projets/{id}', function (Request $request, Response $response, array $args) {
        $response->getBody()->write('Modification du projets' . $args['id']);
        return $response;
    });

    //routes qui supprime une tâche
    $app->delete('/projets/{id}', function (Request $request, Response $response, array $args) {
        $response->getBody()->write('Suppression de la tâche n°' . $args['id']);
        return $response;
    });



};