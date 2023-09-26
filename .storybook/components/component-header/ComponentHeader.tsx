import React, { ReactNode } from 'react';
import clsx from 'clsx';


import styles from './ComponentHeader.module.scss';

type ComponentHeaderProps = {
    name: string;
    version?: string;
    design?: string;
    children?: ReactNode;
};

export const ComponentHeader: React.FC<ComponentHeaderProps> = ({ name, design, children }) => {

    // const packageName = name
    //     .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    //     .replace(/([A-Z])([A-Z])(?=[a-z])/g, '$1-$2')
    //     .toLowerCase();
    //
    // const githubLink = `https://github.com/core-ds/core-components/tree/master/packages/${packageName}`;


    return (
        <div className={clsx(styles.component)}>
            <h1 >
                {name}
            </h1>
            {children && (
                <p
                    className={clsx(styles.text)}
                >
                    {children}
                </p>
            )}


            <div className={styles.info} style={{display: 'flex', alignItems: 'center'}}>

            </div>
        </div>
    );
};
