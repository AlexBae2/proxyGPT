import {FC, memo} from 'react';
import cl from './loader.module.scss';
import {LoadingOutlined} from "@ant-design/icons";
import cn from 'classnames'

interface LoaderProps {
    className?: string;
}

const Loader: FC<LoaderProps> = ({className, ...props}) => {
    return (
        <div className={cn(cl.wrapper, className)} {...props}>
            <LoadingOutlined />
        </div>
    );
};

export default memo(Loader);
