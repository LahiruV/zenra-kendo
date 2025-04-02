import * as React from 'react';
import { Dialog, DialogProps, Window, WindowProps, DialogActionsBar } from '@progress/kendo-react-dialogs';
import { Button } from '@progress/kendo-react-buttons';

type DialogType = 'dialog' | 'window';

export interface KendoDialogProps {
    type: DialogType;
    title: string;
    visible: boolean;
    onClose: () => void;
    children?: React.ReactNode;
    actions?: React.ReactNode;
    width?: string | number;
    height?: string | number;
    className?: string;
    style?: React.CSSProperties;
    modal?: boolean;
    confirmText?: string;
    cancelText?: string;
    onConfirm?: () => void;
}

export const KendoDialog: React.FC<KendoDialogProps> = ({
    type,
    title,
    visible,
    onClose,
    children,
    actions,
    width,
    height,
    className,
    style,
    modal,
    confirmText = 'Yes',
    cancelText = 'No',
    onConfirm
}) => {
    const commonProps = {
        title,
        onClose,
        className,
        style: { width, height, ...style }
    };

    if (!visible) return null;

    const defaultActions = (
        <>
            <Button type="button" onClick={onClose}>
                {cancelText}
            </Button>
            {onConfirm && (
                <Button type="button" onClick={onConfirm}>
                    {confirmText}
                </Button>
            )}
        </>
    );

    return (
        <>
            {type === 'dialog' ? (
                <Dialog {...commonProps as DialogProps}>
                    {children}
                    <DialogActionsBar>{actions || defaultActions}</DialogActionsBar>
                </Dialog>
            ) : (
                <Window {...commonProps as WindowProps} modal={modal}>
                    {children}
                    {actions || defaultActions}
                </Window>
            )}
        </>
    );
};

export default KendoDialog;