import { createContext, Dispatch, useReducer, ReactNode, useMemo } from "react";
import { BudgetActions,  budgetReducer, initialState, BudgetState} from "../reducers/budget-reducer";

// Definición de los tipos de contexto
type BudgetContextProps = {
  state: BudgetState;
  dispatch: Dispatch<BudgetActions>;
  totalExpenses: number;
  remainingBudget: number
  
};

type BudgetProviderProps = {
  children: ReactNode
}

// Creación del contexto
export const BudgetContext = createContext<BudgetContextProps | null>(null);

// Proveedor del contexto
export const BudgetProvider = ({children}: BudgetProviderProps ) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState);


  const totalExpenses = useMemo(()=> state.expenses.reduce((total, expense) => expense.amount + total, 0), [state.expenses])

  const remainingBudget = state.budget - totalExpenses;

  

  return (
    <BudgetContext.Provider 
      value={{ 
        state, 
        dispatch,
        totalExpenses,
        remainingBudget
      }}
      >
      {children}
    </BudgetContext.Provider>
  );
};