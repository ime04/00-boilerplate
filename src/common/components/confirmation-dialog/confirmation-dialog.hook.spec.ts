import { useConfirmationDialog } from './confirmation-dialog.hook';
import { renderHook, act } from '@testing-library/react';
import { Lookup } from 'common/models';

describe('common/components/confirmation-dialog/ConfirmationDialogHook', () => {
	it('should return an object: isOpen and itemToDelete with default values', () => {
		// Arrange
		const defaultOpen = false;
		const defaultLookup: Lookup = { id: '', name: '' };

		// Act
		const { result } = renderHook(() => useConfirmationDialog());

		// Assert
		expect(result.current.isOpen).toEqual(defaultOpen);
		expect(result.current.itemToDelete).toEqual(defaultLookup);
	});

	it('should update itemToDelete when it calls onAccept', () => {
		// Arrange
		const defaultLookup: Lookup = { id: '', name: '' };

		// Act
		const { result } = renderHook(() => useConfirmationDialog());

		act(() => {
			result.current.onAccept();
		});

		// Assert
		expect(result.current.itemToDelete).toEqual(defaultLookup);
	});

	it('should update isOpen when it calls onClose', () => {
		// Arrange
		const newOpen = false;

		// Act
		const { result } = renderHook(() => useConfirmationDialog());

		act(() => {
			result.current.onClose();
		});

		// Assert
		expect(result.current.isOpen).toEqual(newOpen);
	});

	it('should update isOpen and itemToDelete when it calls onOpenDialog', () => {
		// Arrange
		const newOpen = true;
		const newLookup: Lookup = { id: 'test id', name: 'test name' };

		// Act
		const { result } = renderHook(() => useConfirmationDialog());

		act(() => {
			result.current.onOpenDialog(newLookup);
		});

		// Assert
		expect(result.current.isOpen).toEqual(newOpen);
		expect(result.current.itemToDelete).toEqual(newLookup);
	});
});