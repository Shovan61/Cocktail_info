import React, {
    useState,
    createContext,
    useContext,
    useEffect,
    useReducer,
} from 'react';
import useFetch from './custom hooks/useFetch';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [searhDrink, setsearhDrink] = useState('');
    const { isLoading, data } = useFetch(`${url}${searhDrink}`);

    const [alldrinks, setalldrinks] = useState([]);

    useEffect(() => {
        setalldrinks(data);
    }, [data]);

    return (
        <AppContext.Provider
            value={{
                isLoading,
                data,
                setsearhDrink,
                searhDrink,
                alldrinks,
            }}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};
