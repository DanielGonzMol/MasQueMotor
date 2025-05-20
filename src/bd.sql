CREATE DATABASE MasQueMotor;
GO

USE MasQueMotor;
GO

CREATE TABLE cliente (
    cod_cliente INT IDENTITY(1,1),
    nombre NVARCHAR(100),
    ciudad NVARCHAR(100),
    pais NVARCHAR(100),
    DNI NVARCHAR(9), 
    telefono NVARCHAR(15), 
    contrasena NVARCHAR(200),
    correo NVARCHAR(100),
    codPostal NVARCHAR(10),
    CONSTRAINT pk_codCliente_cliente PRIMARY KEY (cod_cliente)
);

CREATE TABLE pedido (
    cod_pedido INT IDENTITY(1,1),
    cod_cliente INT NOT NULL,
    CONSTRAINT pk_codPedido_pedido PRIMARY KEY (cod_pedido),
    CONSTRAINT fk_codCliente_pedido FOREIGN KEY (cod_cliente) REFERENCES cliente(cod_cliente)
);

CREATE TABLE linea_pedido (
    num_linea INT IDENTITY(1,1),
    cantidad INT,
    precio DECIMAL(10,2),
    codPedido INT,
    CONSTRAINT pk_numLinea_lineaPedido PRIMARY KEY (num_linea),
    CONSTRAINT fk_codPedido_lineaPedido FOREIGN KEY (codPedido) REFERENCES pedido(cod_pedido)
);

CREATE TABLE servicio (
    id INT IDENTITY(1,1),
    coste DECIMAL(10,2),
    descripcion NVARCHAR(100),
    CONSTRAINT pk_id_servicios PRIMARY KEY (id)
);

CREATE TABLE vehiculoVenta (
    numBastidor INT,
    marca NVARCHAR(100),
    tipo NVARCHAR(100),
    modelo NVARCHAR(100),
    color NVARCHAR(100),
    combustible NVARCHAR(100),
    motor NVARCHAR(100),
    matricula NVARCHAR(7),
    propietario NVARCHAR(100),
    num_puertas INT,
    extras NVARCHAR(100),
    precio DECIMAL(10,2),
    cod_cliente INT,
    CONSTRAINT pk_numBastidor_vehiculoVendido PRIMARY KEY (numBastidor),
    CONSTRAINT fk_codCliente_vehiculoventa FOREIGN KEY (cod_cliente) REFERENCES cliente(cod_cliente)
);

CREATE TABLE vehiculoCliente (
    num_bastidor INT,
    marca NVARCHAR(100),
    tipo NVARCHAR(100),
    modelo NVARCHAR(100),
    color NVARCHAR(100),
    combustible NVARCHAR(100),
    motor NVARCHAR(100),
    matricula NVARCHAR(7),
    propietario NVARCHAR(100),
    num_puertas INT,
    extras NVARCHAR(100),
    cod_cliente INT,
    CONSTRAINT pk_numBastidor_vehiculoCliente PRIMARY KEY (num_bastidor),
    CONSTRAINT fk_codCliente_vehiculoCliente FOREIGN KEY (cod_cliente) REFERENCES cliente(cod_cliente)
);

CREATE TABLE servicioRealizado (
    idServicio INT IDENTITY(1,1),
    numLineaPedido INT,
    numBastidor INT,
    fecha NVARCHAR(10),
    CONSTRAINT pk_idServicio_servicioRealizado PRIMARY KEY (idServicio),
    CONSTRAINT fk_numLinea_servicioRealizado FOREIGN KEY (numLineaPedido) REFERENCES linea_pedido(num_linea),
    CONSTRAINT fk_numBastidor_servicioRealizado FOREIGN KEY (numBastidor) REFERENCES vehiculoCliente(num_bastidor)
);

-- Inserción correcta de datos
INSERT INTO cliente (nombre, ciudad, pais, DNI, telefono, contrasena, correo, codPostal)
VALUES ('Jose', 'Malaga', 'España', '77199088W', '696802120', 'HOLAQASE', 'oselito@ercampanera.com', '29010');

SELECT * FROM cliente