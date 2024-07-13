import { FC, memo } from 'react';

import { LoadingOutlined } from '@ant-design/icons';
import cn from 'classnames';

import cl from './loader.module.scss';

interface LoaderProps {
    className?: string;
}

const Loader: FC<LoaderProps> = ({ className, ...props }) => {
    return (
        <div className={cn(cl.wrapper, className)} {...props}>
            <LoadingOutlined />
        </div>
    );
};

export default memo(Loader);
