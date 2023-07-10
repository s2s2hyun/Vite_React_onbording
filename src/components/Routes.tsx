import { ReactNode, useContext, ReactElement } from "react";
import { RouterContext } from "./Router";
import React from "react";

interface RoutesProps {
    children: ReactNode | ReactNode[];
}

const Routes = ({ children }: RoutesProps) => {
    const { path, setPath } = useContext(RouterContext);

    window.onpopstate = () => setPath(window.location.pathname);

    let matchedComponent = null;

    React.Children.forEach(children, (child) => {
        if (React.isValidElement(child) && path === (child as ReactElement).props.path) {
            console.log(
                "current",
                (child as ReactElement).props.path,
                (child as ReactElement).props.component
            );
            matchedComponent = (child as ReactElement).props.component;
        }
    });

    return matchedComponent;
};

export default Routes;
