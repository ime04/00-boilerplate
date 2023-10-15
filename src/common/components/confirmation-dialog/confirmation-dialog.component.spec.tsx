import * as React from 'react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('common/ConfirmationDialog', () => {
    it('should be render as expected passing required properties', () => {
        // Arrange
        const props = {
            isOpen: true,
            onAccept: () => { },
            onClose: () => { },
            title: 'Title',
            labels: {
                closeButton: 'Close button',
                acceptButton: 'Open Button'
            },
            children: <h4>Children 1</h4>,
        };

        // Act
        const { getByText } = render(<ConfirmationDialogComponent {...props} />)

        // Assert

        expect(getByText(props.title)).toBeInTheDocument();
        const childrenH1Element = screen.getByRole('heading', { level: 4 });
        expect(childrenH1Element).toBeInTheDocument();
    });

    it('should execute functions when click button', async () => {
        // Arrange
        const props = {
            isOpen: true,
            onAccept: jest.fn(),
            onClose: jest.fn(),
            title: 'test title',
            labels: {
                closeButton: 'close button',
                acceptButton: 'accept button',
            },
            children: <h4>Children 1</h4>,
        };

        // Act
        render(<ConfirmationDialogComponent {...props} />);
        const buttonPrimaryElement = screen.getByRole('button', {
            name: props.labels.acceptButton,
        });
        await userEvent.click(buttonPrimaryElement);

        // Assert
        expect(props.onAccept).toHaveBeenCalled();
        expect(props.onClose).toHaveBeenCalled();

    });

    it('should dialog is close', async () => {
        // Arrange
        const props = {
            isOpen: false,
            onAccept: jest.fn(),
            onClose: jest.fn(),
            title: 'test title',
            labels: {
                closeButton: 'close button',
                acceptButton: 'accept button',
            },
            children: <h4>Children 1</h4>,
        };

        // Act
        render(<ConfirmationDialogComponent {...props} />);

        // Assert
        expect(screen.queryByText(props.title)).toEqual(null);
    });
});
