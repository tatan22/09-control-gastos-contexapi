import {CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import { useBudget } from "../hooks/useBudget";
import AmounDisplay from "./AmounDisplay";

export default function BudgetTraker() {

    const{ state, totalExpenses, remainingBudget, dispatch} = useBudget();

    const percentage = (totalExpenses / state.budget) * 100

    return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className=" flex justify-center">
                <CircularProgressbar
                    value={percentage}
                    styles={buildStyles({
                        pathColor: percentage === 100 ? '#DC2626':'#3b82f6',
                        trailColor: '#F5F5F5',
                        textSize: 8,
                        textColor:  percentage === 100 ? '#DC2626':'#3b82f6',
                    })}
                    text={`${percentage}% Gastado`}
                />
            </div>

            <div className="flex flex-col justify-center gap-8">
                <button
                    type="button"
                    className=" bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg"
                    onClick={()=> dispatch({type:'reset-app'})}
                >
                    Resetear App
                </button>

                <AmounDisplay
                label="Presupuesto"
                amount={state.budget}
                />
                <AmounDisplay
                    label="Disponible"
                    amount={remainingBudget}
                />
                <AmounDisplay
                    label="Gastado"
                    amount={totalExpenses}
                />
            </div>

            
    </div>
    )
}
