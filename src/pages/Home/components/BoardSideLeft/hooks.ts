import { MenuProps } from 'antd';
import { confirmMenuOption } from '../../../../Slice/homeSlice';
import { useStoreDispatch } from '../../../../Store/Store';

export const useBoardSideLeft = () => {
	const dispatch = useStoreDispatch();
	const onClick: MenuProps['onClick'] = (e) => {
		dispatch(confirmMenuOption(e.key));
	};
	return onClick;
};
