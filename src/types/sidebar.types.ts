import { ReactNode } from "react";

export type TRoute = {
    path: string;
    element: ReactNode;
}

export type TRoutePaths = {
    name?: string;
    path?: string;
    element?: ReactNode;
    children?: TRoutePaths[];
}

export type TSidebarItems = {
    key: string;
    label: ReactNode;
    children?: TSidebarItems[];
} | undefined;