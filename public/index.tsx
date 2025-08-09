// import { useMemo } from "react";
// import {
// LeadingActions,
// SwipeableList,
// SwipeableListItem,
// SwipeAction,
// TrailingActions,
// } from "react-swipeable-list";
// import { formatDate } from "../helpers";
// import { Expense } from "../types";
// import AmounDisplay from "./AmounDisplay";
// import { categories } from "../data/categories";
// import "react-swipeable-list/dist/styles.css";

// // Definimos las propiedades que nuestro componente espera recibir.
// // - expense: el objeto con la información del gasto.
// // - onDelete: función callback que se ejecuta al eliminar un gasto.
// // - onUpdate: función callback opcional para actualizar el gasto.
// type ExpenseDetailProps = {
// expense: Expense;
// onDelete: (id: string) => void;
// onUpdate?: (id: string) => void;
// };

// export default function ExpenseDetail({
// expense,
// onDelete,
// onUpdate,
// }: ExpenseDetailProps) {
// // Utilizamos useMemo para buscar la información de la categoría del gasto de manera optimizada.
// // Se vuelve a calcular solo si cambia el gasto (expense).
// const categoryInfo = useMemo(
//     () => categories.find((cat) => cat.id === expense.category),
//     [expense]
// );

// // Definimos las acciones que se muestran al deslizar hacia la derecha (LeadingActions).
// // Aquí se implementa la acción de "Actualizar".
// // Si se ha pasado la función onUpdate como prop, se llamará con el id del gasto.
// // Si no, simplemente se mostrará un mensaje en la consola.
// const leadingActions = () => (
//     <LeadingActions>
//     <SwipeAction
//         onClick={() =>
//         onUpdate ? onUpdate(expense.id) : console.info("Acción actualizar")
//         }
//     >
//         Actualizar
//     </SwipeAction>
//     </LeadingActions>
// );

// // Definimos las acciones que se muestran al deslizar hacia la izquierda (TrailingActions).
// // En este caso, se implementa la acción "Eliminar".
// // Al activarse, se llama a la función onDelete pasando el id del gasto.
// const trailingActions = () => (
//     <TrailingActions>
//     <SwipeAction destructive={true} onClick={() => onDelete(expense.id)}>
//         Eliminar
//     </SwipeAction>
//     </TrailingActions>
// );

// return (
//     // El componente SwipeableList envuelve al item para hacerlo deslizable.
//     <SwipeableList>
//     <SwipeableListItem
//         maxSwipe={0.3} // Define el porcentaje máximo de deslizamiento permitido.
//         leadingActions={leadingActions()} // Acciones al deslizar a la derecha.
//         trailingActions={trailingActions()} // Acciones al deslizar a la izquierda.
//     >
//         {/* Contenedor principal del item del gasto */}
//         <div className="bg-white shadow-lg p-10 w-full border-b border-gray-200 flex gap-5 items-center">
//         <div>
//             {/* Muestra el icono asociado a la categoría del gasto.
//                 Usamos el operador opcional (?.) para evitar errores en caso de que no se encuentre la categoría. */}
//             <img
//             src={/icono_${categoryInfo?.icon}.svg}
//             alt="Icono del gasto"
//             className="w-20"
//             />
//         </div>
//         <div className="flex-1 space-y-2">
//             {/* Muestra el nombre de la categoría en mayúsculas y con estilo */}
//             <p className="text-sm font-bold uppercase text-slate-500">
//             {categoryInfo?.name}
//             </p>
//             {/* Muestra el nombre del gasto */}
//             <p>{expense.expenseName}</p>
//             {/* Muestra la fecha formateada del gasto */}
//             <p className="text-slate-600 text-sm">
//             {formatDate(expense.date!.toString())}
//             </p>
//         </div>
//         {/* Componente encargado de mostrar el monto del gasto */}
//         <AmounDisplay amount={expense.amount} />
//         </div>
//     </SwipeableListItem>
//     </SwipeableList>
// );
// }