import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import BoardCard from './BoardCard';
import { StoreWrapper } from '../../../../../../Utils/wrapperTest';
import { renderHook } from '@testing-library/react-hooks';
import { useCardAction } from './hooks';
import { act } from '@testing-library/react-hooks/native';


describe('BoardCard', function () {
		const mockBoardCardProps = {
			id:'1',
			title:'1',
			description:'1',
			rate:1,
			updateAt:'2023-03-23 21:30:14',
			userName:'username'
		};
	it('should render', function () {
		const { container } = render(
			<StoreWrapper>
				<BoardCard id={"1"} title={"1"} description={"1"} rate={1} updateAt={"1"} userName={"1"}/>
			</StoreWrapper>
				);
		expect(container).toBeInTheDocument();
	});

	it('should onOpenDeleteModal', function() {
		const {result}=renderHook(()=>useCardAction(mockBoardCardProps),{wrapper:StoreWrapper});
		act(()=>{result.current.onOpenDeleteModal(true);});
		expect(result.current.isDeleteModalOpen).toEqual(true);
		expect(result.current.deleteId).toEqual('1');
	});

	it('should handleDelete', function() {
		const {result}=renderHook(()=>useCardAction(mockBoardCardProps),{wrapper:StoreWrapper});
		act(()=>{
			result.current.onOpenDeleteModal(true);
			result.current.handleDelete();});
		expect(result.current.isDeleteModalOpen).toEqual(false);
	});

	it('should onOpenEdit', function() {
		const {result}=renderHook(()=>useCardAction(mockBoardCardProps),{wrapper:StoreWrapper});
		act(()=>{result.current.onOpenEdit();});
		expect(result.current.isEdit).toEqual(true);
		expect(result.current.editId).toEqual('1');
	});

	it('should onCloseEdit', function() {
		const {result}=renderHook(()=>useCardAction(mockBoardCardProps),{wrapper:StoreWrapper});
		act(()=>{result.current.onCloseEdit();});
		expect(result.current.isEdit).toEqual(false);
		expect(result.current.editId).toEqual('');
	});

});
