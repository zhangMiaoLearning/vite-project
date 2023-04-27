import React, { Dispatch, SetStateAction, useState } from 'react';

interface userInfo {
	id: string;
	username: string;
}

interface cardInfo {
	title: string;
	description: string;
	rate: number;
	updateAt: string;
	userName: string;
	id: string;
}

interface GlobalContextProps {
	currentUserInfo: userInfo;
	setCurrentUserInfo: Dispatch<SetStateAction<userInfo>>;
	cardList: cardInfo[];
	setCardList: Dispatch<SetStateAction<cardInfo[]>>;
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
	const [cardList, setCardList] = useState<cardInfo[]>([]);

	return (
		<GlobalContext.Provider
			value={{ currentUserInfo, setCurrentUserInfo, cardList, setCardList }}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalProvider;
