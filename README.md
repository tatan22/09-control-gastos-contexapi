# Planificador de Gastos con Context API y UseReducer

Este proyecto consiste en desarrollar un **planificador de gastos** utilizando **React** con **Context API** y **useReducer**. La aplicación permite **crear**, **actualizar**, **eliminar** y **visualizar detalles** de los gastos, así como filtrarlos por categoría. Incorpora **ventanas modales** creadas con **Headless UI**, un componente de React que facilita la creación de modales interactivos.

## Tabla de Contenido

- [Planificador de Gastos con Context API y useReducer](#planificador-de-gastos-con-context-api-y-usereducer)
  - [Funcionalidades de la Aplicación](#-funcionalidades-de-la-aplicación)
  - [Configuración del Proyecto](#️-configuración-del-proyecto)
  - [Desarrollo de la Interfaz](#️-desarrollo-de-la-interfaz)
  - [Tabla de Contenido](#tabla-de-contenido)
- [Creación de proyecto](docs/creacion-proyecto.md)
- [Introducción a Context API](docs/introduccion-a-context-api.md)
- [Implemetar editar y eliminar con Swipe](docs/implemetar-editar-y-eliminar.md)
- [Agregando Grafica interactiva y Ultimos ajustes](docs/grafica-interactiva.md)

## 📋 Funcionalidades de la Aplicación

- **Gestión de Gastos**: Crear, actualizar, eliminar y consultar detalles de los gastos.
- **Filtrado por Categoría**: Filtrar los gastos según categorías específicas.
- **Ventanas Modales**: Usar modales para formularios y confirmaciones, implementados con Headless UI.
- **Estado Global**: Gestionar el estado de la aplicación con **Context API** y **useReducer**, evitando pasar `state` y `dispatch` a través de props.

> **Nota**: Este proyecto pone en práctica conceptos avanzados de React aprendidos previamente, como la gestión de estado global y el diseño de interfaces modernas.

  [🔝 Volver al inicio](#planificador-de-gastos-con-context-api-y-usereducer)

## 🛠️ Configuración del Proyecto

### Crear el Proyecto y Descargar Materiales

Repetimos los pasos realizados en la clase anterior para crear el proyecto de React. Descargamos los materiales necesarios:
    - **Carpeta de Iconos SVG**: Descarga los íconos SVG que se usarán en la aplicación.
    - Copia la carpeta de íconos a la carpeta `public` del proyecto.

### Instalar Tailwind CSS

Seguimos los pasos de la clase anterior para instalar **Tailwind CSS**:
    1. Instala las dependencias necesarias.
    2. Configura Tailwind CSS en el proyecto.
    3. Asegúrate de que las clases de Tailwind funcionen correctamente.

> **Tip**: Verifica la instalación aplicando una clase de Tailwind (como `bg-blue-500`) a un componente.

  [🔝 Volver al inicio](#planificador-de-gastos-con-context-api-y-usereducer)

## 🖼️ Desarrollo de la Interfaz

Trabajamos en la interfaz del proyecto utilizando **React** y **Tailwind CSS**. Los pasos incluyen:
    - Diseñar una lista de gastos con opciones para editar y eliminar.
    - Implementar formularios en ventanas modales con **Headless UI** para agregar o modificar gastos.
    - Crear un componente de filtrado por categoría.
    - Aplicar estilos con **Tailwind CSS** para una interfaz moderna y responsiva.

> **Nota**: Este proyecto es completo y permite practicar todos los conceptos aprendidos en la clase anterior, incluyendo componentes reutilizables, gestión de estado y diseño de interfaces.

  [🔝 Volver al inicio](#planificador-de-gastos-con-context-api-y-usereducer)
