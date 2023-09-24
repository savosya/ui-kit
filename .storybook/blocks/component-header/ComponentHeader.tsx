import React, { ReactNode } from 'react';
import cn from 'classnames';
import { pluralize } from '@alfalab/utils';


import styles from './ComponentHeader.module.scss';

type ComponentHeaderProps = {
    name: string;
    version?: string;
    design?: string;
    children?: ReactNode;
};

export const ComponentHeader: React.FC<ComponentHeaderProps> = ({ name, design, children }) => {

    const packageName = name
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        .replace(/([A-Z])([A-Z])(?=[a-z])/g, '$1-$2')
        .toLowerCase();

    const githubLink = `https://github.com/core-ds/core-components/tree/master/packages/${packageName}`;


    return (
        <div className={cn('sb-unstyled', styles.component)}>
            <h1 >
                {name}
            </h1>
            {children && (
                <p
                    className={cn(styles.text)}
                >
                    {children}
                </p>
            )}
            <div className={styles.links}>
                <a
                    className={cn(styles.design, {
                        [styles.commonLink]: !design,
                    })}
                    href={
                        design ||
                        'https://www.figma.com/file/cdNnkh2QdxuvYLrBm4cubM/Web-%3A%3A-Core-Default-Components'
                    }
                    target='_blank'
                >
                    Figma
                </a>
            </div>

            <div className={styles.info} style={{display: 'flex', alignItems: 'center'}}>

            </div>
        </div>
    );
};
