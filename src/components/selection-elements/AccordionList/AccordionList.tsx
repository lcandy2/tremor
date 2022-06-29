import React from 'react';

import { classNames, parseMarginTopClassNames } from '@utils/classname-utils';
import BaseComponentProps from '@common/BaseComponentInterface';

export interface AccordionListProps extends BaseComponentProps {
    shadow?: boolean,
    children: React.ReactElement[],
}

const AccordionList = ({
    shadow = true,
    marginTop,
    children,
}: AccordionListProps) => {
    const numChildren = React.Children.count(children);

    return (
        <div className={ classNames(
            parseMarginTopClassNames(marginTop),
            'rounded-lg',
            shadow ? 'shadow' : '',
        ) }>
            { React.Children.map(children, (child, idx) => {
                console.log(child.props.className);
                if (idx === 0) {
                    return (
                        <>
                            { React.cloneElement(child, {
                                shapeClassNames: 'border-t border-l border-r border-b rounded-t-lg shadow-none'
                            }) }
                        </>
                    );
                }
                if (idx === numChildren - 1) {
                    return (
                        <>
                            { React.cloneElement(child, {
                                shapeClassNames: 'border-b border-l border-r rounded-b-lg shadow-none'
                            }) }
                        </>
                    );
                }
                return (
                    <>
                        { React.cloneElement(child, { shapeClassNames: 'border-b border-l border-r shadow-none' }) }
                    </>
                );
            })}
        </div>
    );
};

export default AccordionList;