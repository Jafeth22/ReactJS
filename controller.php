<?php
$nombreSP = $_POST['nombreSP'];

//Es lo mismo que requiere (En caso que haya un error no se sigue ejecutando el script), pero si el mismo archivo se incluye más de una vez, este solamente lo añade una.
require_once('conexionMySQL.php');

/**
 * include: En caso que no exista un archivo, este emite un WARNING y sigue ejecutando el script
 * include_once(): Si el archivo se incluye más de una vez, este solamente lo añade una.| 
 */

$conexion = new BaseDatos();

$conexion = new BaseDatos();
echo $conexion->ejecutarSP($nombreSP);