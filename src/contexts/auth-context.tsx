import { UserTypes } from '@types';
import React, { useContext, useState, useEffect, useMemo, createContext, Children } from 'react';

const AuthContext = createContext<any>({});

export const useAuth = () => {
	return useContext(AuthContext);
};

const AuthProvider = ({ children }: any) => {
	const [user, setUser] = useState<UserTypes>({ });

	return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
