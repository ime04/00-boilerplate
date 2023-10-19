import { useConfirmationDialog } from './confirmation-dialog.hook';
import { renderHook, act } from '@testing-library/react';
import { Lookup } from 'common/models';

describe('common/components/confirmation-dialog/ConfirmationDialogHook', () => {
	it('should return isOpen and itemToDelete equals to default values', () => {
		// Arrange
		const defaultOpen = false;
		const defaultLookup: Lookup = { id: '', name: '' };

		// Act
		const { result } = renderHook(() => useConfirmationDialog());

		// Assert
		expect(result.current.isOpen).toEqual(defaultOpen);
		expect(result.current.itemToDelete).toEqual(defaultLookup);
	});

	it('should update lookup when onAccept is called', () => {
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

	it('should isOpen return false when onClose is called', () => {
		// Arrange

		// Act
		const { result } = renderHook(() => useConfirmationDialog());

		act(() => {
			result.current.onClose();
		});

		// Assert
		expect(result.current.isOpen).toBe(false);
	});

	it('should update isOpen and itemToDelete when onOpenDialog is called', () => {
		// Arrange
		const newLookup: Lookup = { id: 'test id', name: 'test name' };

		// Act
		const { result } = renderHook(() => useConfirmationDialog());

		act(() => {
			result.current.onOpenDialog(newLookup);
		});

		// Assert
		expect(result.current.isOpen).toBe(true);
		expect(result.current.itemToDelete).toEqual(newLookup);
	});
});