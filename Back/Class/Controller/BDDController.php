<?php

class BDDController
{
    private static $instances = [];
    private static $password = '';
    private static $connect = null;
    public static $servername = 'localhost';
    public static $ursername = 'root';

    protected function __construct() { }

    public static function getInstance(): BDDController
    {
        $cls = static::class;
        if (!isset(self::$instances[$cls]))
        {
            self::$instances[$cls] = new static();
        }

        return self::$instances[$cls];
    }

    private static function connectBDD()
    {
        $conn = new mysqli(self::$servername, self::$ursername, self::$password);

        if($conn->connect_error){
            return('Erreur : ' .$conn->connect_error);
        }

        return $conn;
    }

    public function getConnect()
    {

        if(!isset(self::$connect))
        {
            self::$connect = self::connectBDD();
        }

        return self::$connect;
    }

    public function setPasswordBDD(string $psw)
    {
        $this->password = $psw;
    }

    public function closeBDD()
    {
        if(isset(self::$connect))
        {
            self::$connect->close();
            self::$connect = null;
        }
    }

}