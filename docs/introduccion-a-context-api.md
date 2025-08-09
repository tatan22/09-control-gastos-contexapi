# Introducción a Context API

[🔝 Volver Gestor de Gastos](../README.md)

---

## ¿Que es Context API?

Context api permite tener un estado global de tu app, esto quiere decir que solo se tiene una instancia del state que se puede acceder desde cualquier
componente sin pasarlo por diferentes cmponentes a traves de props.

Esta herramienta ya viene incluida en la versión 18 de React, a diferencia de redux toolkit o zustand.

- El hook que vamos a usar es **useContext**.
- Por eso muchas librerias usan el hook **useContext** para acceder al state global.

    >**Ejemplo**: Tenemos una tienda y tenemos un state de productos, de `app` lo pasamos a `tienda` y de tienda a `productos`.
    con **useContext**  podemos pasaarlo directamente de `app` a `productos` sin tener que pasar por `tienda`.

- Context API no requiere dependencias pero su boilerplate para configurarlo puede ser un poco complejo.

### Alternativas a Context API

- Redux Toolkit
- Zustand

[🔝 Volver al inicio](#introducción-a-context-api)

---

## Creando un Context con Context API para nuestro Proyecto

Creamos un directorio llamado `context` y dentro creamos un archivo llamado `BudgetContext.tsx`. en muchos proyectos vas a notar
que se nombra el context como si fuese una clase.
Vamos agregar useReducer a nuestro provider, pasamos el state y el dispatch al provider.
En el return del provider pasamos el state y el dispatch

- Pero debemos crear el context con createContext.
  - recibe un valor por defecto.
  - Este provider maneja el state y el dispatch. Debemos crear su type.
  - Creamos `export const BudgetContext = createContext<BudgetContextProps>()`;
    - Tenemos dos opciones que pasarle al createContext.
      - Un objeto vacio `{} as BudgetContextProps`. Le digo a typescript que confie en mi, que le voy a pasar un objeto.
      - null!
  - El contex y el provider no estan conectados, por eso en el return del provider pasamos el BudgetContext con sintaxis de componente,
   le pasamos el state y el dispatch. Ya asi cuando instaciemos tenemos acceso al state y al dispatch.

    ```typescript
    <BudgetContext.Provider value={{state, dispatch}}>
    {children}
    </BudgetContext.Provider>
    ```
  
  - `children` hace referencia a los hijos de un componente, puede que mas adelante  no recordemos como se llame la prop de un componente y que se usen como children.
    - Para solucionar  el any de children, usamos un type que se llama ReactNode.
  - `value` es en cual pasamos los props al provider. En este caso pasamos el state y el dispatch.

## Como utilizar Context API en nuestro Proyecto

En el main importo el BudgetProvider, este contiene los datos globales de mi app, mientras el context los genera en el provider.
Alli la importancia del value ya que tiene la información que voy a consumir en mi app.

### Creando un custon hook para acceder al Context y al UseReducer

El la carpeta de hooks creamos un archivo llamado `useBudget.ts` y dentro creamos la logica del hook, en el no retornamos un objeto, ya qye va a retornar el context completo que contiene el state y el dispatch.
Como buena practica es validar si el context existe, si no existe se lanza un error.

#### llamando las aciones del reducer desde el hook

- dispatch ya es retornado como un objeto con las acciones, por lo que podemos acceder a ellas desde el hook.

> **Tip**: para formatera el valor de dinero podemos crar un directorio llamado `utils` y dentro creamos un archivo llamado `formatMoney.ts` y dentro creamos la logica de formateo. implemetsmos Intl.NumberFormat para formatear el dinero.

## Creacion de Ventana Modal con Heandless

Creamos un archivo llamado `ExpenseModal.tsx` y dentro creamos el componente.
Debemos instalar la libreria de heandless UI `@headlessui/react` y `@heroicons/react/24/outline` para los iconos.
Usamos && para validar si la ventana modal esta abierta, el && solo se ejecuta si la sondicion del la izquierda es verdadera.

### Creando el dispatch de la ventana modal

- Debemos crear una accion para abrir y cerrar la ventana modal.
- Debemos crear un reducer para manejar la ventana modal.
- Debemos crear un state para manejar la ventana modal.
- Debemos crear un type para manejar la ventana modal.

### Cerrar la ventana modal

- En ExpenseModal tenemos un onClose, lo usamos para cerrar la ventana modal.
- Creamos una nueva accione en el reducer para cerrar la ventana modal.
- De useBudget extremos el dispatch para cerrar la ventana modal.
- Ya para finalizar creamos enl componete ExpenseForm, que tendra en formulario para crear un gasto.Este sera agregado en ExpenseModal

---

### Creacion del Formulario de Gastos

Se crean todos los componetes del formulario de gastos y sus estilos, luego creamos el formulario de gastos en ExpenseForm

#### Intalacion de dependencia de react-data-pickers

Esta libreria es para crear un componente de formularios con un calendario. Soporta fechas y horas con typescript.

- Debemos instalar la libreria de heandless UI `@headlessui/react` y `@heroicons/react/24/outline` para los iconos.
- Tambien debemos instalar un dependecia requerida de react-data-pickers que es React-Calendar.
  Ejecutamos `npm install react-calendar`
Ya en la documentacion nos indica:
- Que debemos importarlo como un componente de react.
- importar sus estilos con un css en el archivo de index de la carpeta de estilos.
- implemertar unos types para el componente de react-data-pickers.

#### Definiendo los types para los Gastos

- Creamos el directorio de types llamado `types` y dentro creamos un archivo llamado `index.ts`.
- Del dependencia de React Calendar definimos el type para date

#### Escribiendo gastos en el State

- Creamos un handleChange especialmente para la dependecia de React Calendar.
  - todo esto se debe por que ellos tiene un value personalizado, definiendo asi un type personalizado para ese componente.
- Tendremos un segundo handleChange para los otros inputs.

#### Mostrando alerta si la de los campos estan vacios

Creamos un handleSubmit que se encarga de validar si los campos estan vacios, importante que usamos preventDefault para no recargar la pagina.
Implemtenamos el object.value que transfoma un objeto a un arreglo.

- implemtamos en metodo .include  que nos permite saber si un arreglo contiene un elemento, para este caso un string vacio.

- Creamos un errorMessage que se encarga de mostrar el error en el formulario, pero esta vez no le pasamos el children como atributo del componente, solo le pasamos el texto del error como {error}
  - children hace referencia a los elementos hijos de un componente, lo renderizamos en un parrafo. el typo de children es ReactNode.
  - ReactNode me permite renderzar string o componentes dentro de otros componentes. Puedo poner el type que viene desde react PropsWithChildren.

    - Usa PropsWithChildren cuando quieras recibir un componente con sus hijos.

---

### Definicendo acciones para crear un gasto

- add-Budget
- show-modal
- close-modal
- add-expense

add-expense, tendra como payload: {expense: DraftExpense}, donde DraftExpense es un type que creamos en types/index.ts,
para este caso en especifico no generamos un id unico, interpretaremos que estamos usando un DB en el futuro.

> Para generar id unicos usaremos la libreria uuid que instalamos con `npm install uuid`, importante nos va a pedir
>instalar un dependecia de typescript que es `@types/uuid`

Vamos a crerar una funcion que va tomar un payload y añadirle un id unico; lo mas importante es que lo va a convertir en un expense.

### Reiciciar el formulario

Para esto tenemos dos formas de hacerlo:

- Limpiar los inputs.
- Limpiar todo el formulario.

Vamos ver ambas formas de hacerlo.
En ExpenseForm pordemos limpiar los inputs con en la accion add-expense  `setExpense({...expense, amount: 0, expenseName: '', category: '', date: new Date()})`, deben tener su respectivos values.

Cerrar el modal una vez se agrege el gasto, vamos al reducer y modal false para cerrar la ventana modal.

---

## Creacion del componente para mostrar los gastos

Creamos el ExpenseList para mostrar todos los gastos. Le pasamos el reducer.

En este recorremos el arreglo de expenses y renderizamos cada gasto en un componente `ExpenseDetail`.

- Le pasamos sus respectivos props.

Debemos implementar una libreria para mostrar fechas en español.Trabajarr con fechas en muy complicado pero las funciones
Intl son muy poderosas.

En nuestro helper podemos usar Intl para formatear las fechas.

- creamos un objeto `options : Intl.DateTimeFormatOptions`

### Mostrando iconos de categorias dependiendo del dicionario

Ya tenemos los iconos para las categorias en la carpeta de assets, ahora debemos mostrarlos en el componente.
Extraemos la informacion del icono de la categoria, usando el id de la categoria con un metodo de array find.
