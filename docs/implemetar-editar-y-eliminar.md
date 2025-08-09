# Implemetar Swipe para editar y eliminar

Se implementa el Swipe para editar y eliminar con la libreria React Swipeable List.
Se lleva a cabo toda la instalacion de la libreria y se implementan los componentes de la libreria desde la documentacion oficial.
Esta nos permite deslizar los items de la lista para editar o eliminar.

- tiene varios componentes:
  - LeadingActions: permite definir las acciones que se ejecutan al deslizar hacia la derecha.
  - TrailingActions: permite definir las acciones que se ejecutan al deslizar hacia la izquierda.
  - SwipeableList: permite envolver al item para hacerlo deslizable.
  - SwipeableListItem: permite hacer que el item se deslize.
  - SwipeAction: permite definir una accion que se ejecuta al deslizar el item.

Contien su propia hoja de estilo.

- Debemos importa la hoja de estilo de la libreria `react-swipeable-list/dist/react-swipeable-list.css`
- Todo lo que queremos que se le aplique lo debemos rodear con el componente SwipeableList.
- Tambien las acciones que queremos que se le apliquen lo debemos rodear con el componente SwipeableListItem.
  - Esta recibe unos props que son:
    - maxSwipe: Define el porcentaje maximo de deslizamiento permitido. Este por defauld es 1 que significa que el item se
    puede deslizar hasta el final de la pantalla, se debe limitar hasta 0.5.
    - leadingActions: Define las acciones que se ejecutan al deslizar hacia la derecha.
    - trailingActions: Define las acciones que se ejecutan al deslizar hacia la izquierda.

Se debe pasar una configuracion en las directivas de Tailwind para que se aplique el estilo de la hoja de estilo de la libreria.

> Trae un prop que se llama destructive que nos permite indicar si la accion es destructiva o no. Si la accion es destructiva, se muestra un color rojo en el fondo de la accion. Elimina de forma visual el item al hacer click en la accion ya debemos generar el evento onClick que se ejecuta al hacer click en la accion.
  
## Para actualizar

Queremos mostrar el modal cuando se deslice el item hacia la izquierda para actualizarlo, para esto debemos crear una accion para mostrar el modal y otra para cerrarlo.

- Importante detectar el gasto a actualizar pasando el id del gasto.
- Se deve cargar toda la informacion del gasto en el modal.
- Algo a tener en cuenta es saber si cuando se abre el modal queremos editar o crear un nuevo gasto.
  - Un punto clave es el typo  que le damos al expense que es de tipo DraftExpense es temporal ya que le c
  reamos un id unico para identificarlo, pero si es de tipo Expense en cual no tiene un id unico.
