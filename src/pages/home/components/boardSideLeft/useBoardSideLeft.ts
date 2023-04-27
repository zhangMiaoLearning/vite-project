import { MenuProps } from 'antd';
import { confirmMenuOption } from '../../../../slice/homeSlice';
import { useStoreDispatch } from '../../../../store/Store';

export const useBoardSideLeft = () => {
	const dispatch = useStoreDispatch();
	const onClick: MenuProps['onClick'] = (e) => {
		dispatch(confirmMenuOption(e.key));
	};
	return onClick;
};
