import { renderHook } from '@testing-library/react-hooks';
import { StoreWrapper } from '../../../../../Utils/wrapperTest';
import { useCardList } from './hooks';
import { act } from '@testing-library/react-hooks/native';

describe('useCardList hooks test', function() {
	it('should default empty list',function(){
		const { result } = renderHook(() => useCardList(),{wrapper:StoreWrapper});
		expect(result.current.list).toEqual([]);
	});

	it('should return empty list with query no value', function() {
		const {result}=renderHook(()=>useCardList(),{wrapper:StoreWrapper});
		act(()=>{result.current.onQuery('');});
		expect(result.current.list).toEqual([]);
	});
});
