# architecture_appli

Here is the project To-do list of tasks, in order to be able to succeed it must be ensured that the various technologies necessary are present:

- A computer running Windows 10
- PHP 7.4 or higher
- Angular CLI: 13.2.5
- Node: 16.13.2
- Package manager: npm 8.1.2

The database is on a remote server, an internet connection is required
Then here is the official slim doc:

# Slim Framework 4 Skeleton Application

[![Coverage Status](https://coveralls.io/repos/github/slimphp/Slim-Skeleton/badge.svg?branch=master)](https://coveralls.io/github/slimphp/Slim-Skeleton?branch=master)

Use this skeleton application to quickly setup and start working on a new Slim Framework 4 application. This application uses the latest Slim 4 with Slim PSR-7 implementation and PHP-DI container implementation. It also uses the Monolog logger.

This skeleton application was built for Composer. This makes setting up a new Slim Framework application quick and easy.

## Install the Application

Run this command from the directory in which you want to install your new Slim Framework application. You will require PHP 7.4 or newer.

```bash
composer create-project slim/slim-skeleton [my-app-name]
```

Replace `[my-app-name]` with the desired directory name for your new application. You'll want to:

* Point your virtual host document root to your new application's `public/` directory.
* Ensure `logs/` is web writable.

To run the application in development, you can run these commands 

```bash
cd [my-app-name]
composer start
```

After that, open `http://localhost:8080` in your browser. If you want to use another dock, you can change it at the end of the composer.json

Run this command in the application directory to run the test suite

```bash
composer test
```

That's it! Now go build something cool.
