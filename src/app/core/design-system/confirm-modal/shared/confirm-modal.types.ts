export interface ConfirmModalConfig {
    title?: string
    message: string
    icon?: {
        name?: string
        color?: 'info' | 'success' | 'warning' | 'error'
    };
    actions: {
        confirm: {
            label: string
            color: 'success' | 'warning'
        };
        cancel?: {
            label: string
        };
    };
    dismissible?: boolean
}
