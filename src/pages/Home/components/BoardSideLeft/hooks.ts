import { MenuProps } from 'antd';
import { setSelectKey } from '../../../../Slice/homeSlice';
import { useDispatch } from 'react-redux';

export const useBoardSideLeft = () => {
	const dispatch = useDispatch();
	const onClick: MenuProps['onClick'] = (e) => {
		dispatch(setSelectKey(e.key));
	};
	return onClick;
};
