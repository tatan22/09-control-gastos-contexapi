# Creación de Proyecto

[🔝Volver Planificador de Gastos](../README.md)

---

Este documento describe los pasos iniciales para crear un proyecto de **Planificador de Gastos**, enfocándose en la creación de los primeros componentes y la implementación de un **reducer** para gestionar el estado del presupuesto y los gastos. Utilizamos **React** con **Context API** para manejar un estado global, evitando pasar props entre componentes.

## Tabla de Contenido

- [Primeros Componentes](#primeros-componentes)
- [Creando el Reducer](#creando-reducer)

[🔝 Volver al inicio](#creación-de-proyecto)

## Creando los Primeros Componentes {#primeros-componentes}

En esta sección, desarrollamos los componentes iniciales del proyecto, comenzando con el componente `BudgetForm`, que permite al usuario ingresar un presupuesto.

### Componente BudgetForm

El componente `BudgetForm` es un formulario que gestiona la creación de un presupuesto. Sus características incluyen:

- **Estado Local**: Utiliza un estado (`useState`) para almacenar el valor del presupuesto ingresado.
- **Handler para Enviar Presupuesto**: Incluye una función que envía el presupuesto al componente padre.
  - Usa `e.target.valueAsNumber` o `+e.target.value` para obtener el valor del input en tiempo real.

#### Validación del Presupuesto

- **Reglas de Validación**:
  - El presupuesto debe ser un número.
  - El presupuesto debe ser mayor a 0.
- **Comportamiento**:
  - Si el presupuesto no es válido, se muestra un mensaje de error.
  - Si es válido, se habilita el botón de envío.
  - Al enviar, el presupuesto se pasa al componente padre y se resetea el input.

> **Tip**: Usa `useMemo` para optimizar la validación, ejecutándola solo cuando el usuario escribe en el input.

- **Lógica de Validación**:
  - Utiliza el atributo `disabled` en el botón de envío para deshabilitarlo si el presupuesto no es válido.
  - Usa `isNaN(budget) || budget <= 0` para verificar que el presupuesto sea un número mayor a 0.

[🔝 Volver al inicio](#creación-de-proyecto)

## Creando el Reducer {#creando-reducer}

Para gestionar el estado global del presupuesto y los gastos, implementamos un **reducer** en un archivo llamado `budgetReducer.js`. Esto es especialmente útil en proyectos pequeños, aunque en aplicaciones más grandes se recomienda usar múltiples reducers.

### Pasos para Crear el Reducer

- **Archivo `budgetReducer.js`**:
  - Define las acciones que el reducer puede manejar (por ejemplo, `AGREGAR_PRESUPUESTO`, `AGREGAR_GASTO`).
  - Crea un estado inicial (`initialState`) con las propiedades `presupuesto` y `gastos`.
- **Estado Global**:
  - Usamos **Context API** para compartir el estado entre componentes, evitando pasar props manualmente.
- **Implementación del Reducer**:
  - Pasa el `initialState` y la `action` al reducer.
  - Usa un `switch` o `if` para manejar las acciones y actualizar el estado.
  - Retorna el nuevo estado con los valores actualizados de `presupuesto` y `gastos`.

> **Tip**: Con **Context API** o un manejador de estados globales (como Redux), puedes evitar pasar props entre componentes, haciendo el código más limpio y escalable.

    [🔝 Volver al inicio](#creación-de-proyecto)
    