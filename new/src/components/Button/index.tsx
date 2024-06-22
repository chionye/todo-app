import './Button.css';

interface ButtonProps {
    label: string,
    handleClick:  React.MouseEventHandler<HTMLButtonElement>
}

export const Button: React.FC<ButtonProps> = ({label, handleClick}) => {
    return(
        <button onClick={handleClick} className='button'>{label}</button>
    )
}