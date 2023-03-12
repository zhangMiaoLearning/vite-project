import React, { Dispatch, SetStateAction, useState } from 'react';

interface userInfo {
	id: string;
	username: string;
}

interface GlobalContextProps {
	currentUserInfo: userInfo;
	setCurrentUserInfo: Dispatch<SetStateAction<userInfo>>;
}
export const GlobalContext = React.createContext<GlobalContextProps>(
	{} as GlobalContextProps
);
type CaughtProviderProps = {
	children: React.ReactNode;
};
const GlobalProvider: React.FC<CaughtProviderProps> = ({ children }) => {
	const [currentUserInfo, setCurrentUserInfo] = useState<userInfo>(
		{} as userInfo
	);

	return (
		<GlobalContext.Provider value={{ currentUserInfo, setCurrentUserInfo }}>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalProvider;
