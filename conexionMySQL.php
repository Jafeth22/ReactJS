<?php
class BaseDatos_PDO
{
    private function abrirConexion()
    {
        $servidor = "localhost";
        $usuario = "pruebasMySQL";
        $contrasena = "123";
        $basededatos = "PRUEBAS_BD";

        $conn = new PDO('mysql:host=' . $servidor . ';dbname=' . $basededatos, $usuario, $contrasena);
        return $conn;
    }

    private function cerrarConexion($conexion)
    {
        $conexion = null;
    }

    public function ejecutarSP($PNombre = '')
    {
        $mbd = $this->abrirConexion();
        $consulta = $mbd->prepare("CALL Muestra_Personas('$PNombre');");
        $consulta->execute();
        $resultado = [];

        $resultado[] = $consulta->fetchAll(PDO::FETCH_ASSOC);

        $this->cerrarConexion($mbd);

        return json_encode($resultado);
    }
}
