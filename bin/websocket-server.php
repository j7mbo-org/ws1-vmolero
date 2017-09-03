<?php

require_once __DIR__ . '/../vendor/autoload.php';

use React\EventLoop\Factory;

$class = new \Workshop\EventHandler('0.0.0.0', 1338);

$loop = Factory::create();

$router = new Thruway\Peer\Router($loop);

$router->addTransportProvider($class);

$router->start();