import React from "react";

export interface IAppState {
    token: string | null;
    firstname: string;
    lastname: string;
    setAuthInfo: (jwt: string | null, firstName: string, lastName: string) => void;
}

export const initialAppState: IAppState = {
    token: null,
    firstname: '',
    lastname: '',
    setAuthInfo: (): void => {}
} 

export const AppContext = React.createContext<IAppState>(initialAppState);
export const AppContextProvider = AppContext.Provider;
export const AppContextConsumer = AppContext.Consumer;